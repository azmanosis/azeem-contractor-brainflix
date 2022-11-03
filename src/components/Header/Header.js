import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';

function Header() {
    return (
        <div>
            <img className='' src={logo} alt='logo'></img>
            <input className="search" placeholder='Search'></input>
            <div className='user' alt='user'></div>
        </div>
    )
}

export default Header