import './SideBarVid.scss';
import { Link } from 'react-router-dom';

function SideBarVid({ videoId, image, title, channel }) {


    return (
        <Link to={`/videos/${videoId}`} className="video-link">
        
            <section className='video' key={videoId}  >

                <div className='video-image-container'>
                    <img className='video__image' src={image} alt="video" />
                </div>

                <div className="video-description">
                    <h6 className="video-description__title">{title}</h6>
                    <p className="video-description__channel">{channel}</p>
                </div>

            </section>
        
        </Link>
    )
};

export default SideBarVid;