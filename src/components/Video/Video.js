import './Video.scss';
import { Link } from 'react-router-dom';


function Video({ image, videoId }) {
    return (

        <Link to={`/videos/${videoId}`}>

            <video
                className='main-video'
                poster={image}
                controls />

        </Link>

    )
};

export default Video;