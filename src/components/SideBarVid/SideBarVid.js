import './SideBarVid.scss';
import { Link } from 'react-router-dom';

function SideBarVid({ videoId, image, title, channel }) {


    return (
        <Link to={`/videos/${videoId}`} className="video-link">
        
            <section className='video' key={videoId}  >

                
                <img className='video__image' src={image} alt="video" />

                <div className="video-description">
                    <span className="video-description__title">{title}</span>
                    <span className="video-description__channel">{channel}</span>
                </div>

            </section>
        
        </Link>
    )
};

export default SideBarVid;