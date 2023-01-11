import './Header.scss';
import BrainFlix from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>

            <Link to='/'>
                <div className="header__logo-container">
                    <img className="header__logo" src={BrainFlix}
                        alt='BrainFlix logo' />
                </div>
            </Link>

            <div className='header__search'>
                <form className='header__form'>
                    <label className='search'>
                        <input type='text' placeholder='Search' name='search' className='search__input' />
                    </label>
                </form>


                <div className="header-profile header-profile--mobile">
                    <div className="header-profile__image"></div>
                </div>

            </div>

            <Link to='/upload'>
                <button className='button'>UPLOAD</button>
            </Link>

            <div className="header-profile--tablet">
                <div className="header-profile__image"></div>
            </div>

        </header>
    )
};

export default Header;
