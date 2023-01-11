import './Header.scss';
import BrainFlix from '../../assets/logo/BrainFlix-logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import Upload from '../Upload/Upload';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            
            <Link to='/'>
               <div className="header__image-container">
                    <img className="header__image" src={BrainFlix}
                        alt='BrainFlix logo' />
                </div>
            </Link>


            <form className='header__form'>
                {/* SearchBar Component */}
                <SearchBar />

                {/* ProfilePic Component */}
                <ProfilePic />
            </form>

            {/* Upload Component */}
            <Upload />
        </header>
    )
};

export default Header;
