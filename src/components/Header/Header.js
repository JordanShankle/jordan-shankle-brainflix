import './Header.scss';
import BrainFlix from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    
    return (
        <>
            <header className='header header--mobile'>

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


                    <div>
                        <div className="header-profile__image"></div>
                    </div>
                </div>

                
                <button className='button' onClick={() => navigate("/upload")}>UPLOAD</button>

            
            </header>
        </>



    )
};

export default Header;
