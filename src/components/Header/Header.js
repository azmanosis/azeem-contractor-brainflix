import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';

function Header() {
    return (
        <div>
            <img className='logo' src={logo} alt='logo'></img>
            <div className='header'>
                <input className="header__search" placeholder='Search'></input>
                <button className='header__upload'>UPLOAD</button>
                <div className='header__user' alt='user'></div> 
            </div>
            <button className='header__upload'>UPLOAD</button>
        </div>
    )
}

export default Header