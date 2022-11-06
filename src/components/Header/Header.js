import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo--height" src={logo} alt="brainflix-logo"></img>
            </div>
            <div className="header__navigation">
                <input className="header__navigation--search" placeholder='Search'></input>
                <button className='header__navigation--upload'>UPLOAD</button>
                <div className='header__navigation--user' alt='user'></div> 
            </div>
            <button className='header__upload'>UPLOAD</button>
        </div>
    )
}

export default Header