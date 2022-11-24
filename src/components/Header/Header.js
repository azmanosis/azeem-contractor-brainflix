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
                <input id="search" className="header__navigation--search" placeholder='Search'></input>
                <Link to="/upload">
                    <button id="upload" className='header__navigation--upload'>UPLOAD</button>
                </Link>
                <div id="user" className='header__navigation--user' alt='user'></div>
            </div>
            <Link to="/upload">
                <button className='header__upload'>UPLOAD</button>
            </Link>
        </div>
    )
}

export default Header