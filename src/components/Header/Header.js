import './Header.scss';
import BrainFlix from '../../assets/logo/BrainFlix-logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import Upload from '../Upload/Upload';
import ProfilePic from '../ProfilePic/ProfilePic';

function Header() {
    return (
        <header className='header'>
            <div className="header__image-container">
                <img className="header__image" src={BrainFlix}
                    alt='BrainFlix logo' />
            </div>

            <form className='header__form'>
                <SearchBar />

                <ProfilePic />
            </form>

            <Upload />
        </header>
    )
};

export default Header;
