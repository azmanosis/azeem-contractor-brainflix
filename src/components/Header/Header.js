import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo--height" src={logo} alt="brainflix-logo"></img>
                </div>
            </Link>
            <div className="header__navigation">
                <div className="header__navigation--flex">
                    <input id="search" className='header__navigation--flex--search' placeholder='Search'></input>
                    <div id="user" className='header__navigation--flex--user' alt='user'></div>
                </div>
                <Link to="/upload" className="header__navigation--upload">
                    <button id="upload" className='header__navigation--upload--button'>UPLOAD</button>
                </Link>
            </div>
        </div>
    )
}

export default Header