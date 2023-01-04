import './Header.scss';
import BrainFlix from '../../assets/logo/BrainFlix-logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className="header__image-container">
                <img className="header__image" src={BrainFlix}
                alt='BrainFlix logo'/>
            </div>

            <form className='header__form'>
                <input type='text' id='header-search' placeholder='Search'
                    name='search' className='header__search'></input>

                <div className="header__profile-image-container">
                    <div className="header__profile-image"></div>
                </div>
            </form>

            <button className='header__button'>UPLOAD</button>
        </header>
    )
};

export default Header;
