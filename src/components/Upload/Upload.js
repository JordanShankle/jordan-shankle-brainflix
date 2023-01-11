import './Upload.scss';
import { Link } from 'react-router-dom';


function Upload () {
    return (
        <>
            <Link to='/upload' >
                <button className='button'>UPLOAD</button>
            </Link>
        </>
    )
}

export default Upload;