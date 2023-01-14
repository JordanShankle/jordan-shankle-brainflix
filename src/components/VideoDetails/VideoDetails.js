import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';

function VideoDetails({ title, videoId, channel, views, timestamp, likes, description, numberOfComments  }) {

    return (
        <section className='video-details' key={videoId}>
            <h2 className='video-details__title'>{title}</h2>

                <div className='video-details-info-container'>
                    <div className='video-details-info'>
                        <div className='video-details-info__channel'>
                            By {channel}
                        </div>
                        
                        <div className='video-details-info__date'>
                            {new Date(timestamp).toLocaleDateString("en-us")}
                        </div>
                    </div>



                    <div className='video-details-info'>

                        
                        <div className='video-details-info__views'>
                        <img src={viewsIcon} alt="views icon" className='views-icon' />
                            {views}
                        </div>
                        
                        <div className='video-details-info__likes'>
                            <img src={likesIcon} alt="views icon" className='likes-icon' />{likes}
                        </div>
                    </div>
                </div>



            <div>
                <p className='video-details__description'>
                    {description}
                </p>
                <h6 className='number-comments'>
                    {numberOfComments.length} Comments
                </h6>
            </div>


        </section>
    )
}


export default VideoDetails;