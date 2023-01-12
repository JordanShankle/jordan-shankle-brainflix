import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';

function VideoDetails({ title, videoId, channel, views, timestamp, likes, description, numberOfComments  }) {

    return (
        <section className='video-details' key={videoId}>
            <h2 className='video-details__title'>{title}</h2>

                <div className='video-details-left'>
                    <div className='video-details-left__item'>
                        By {channel}
                    </div>
                    <div className='video-details-left__item__views'>
                    <img src={viewsIcon} alt="views icon" />{views}
                    </div>
                </div>

                <div className='video-details-right'>
                    <div className='video-details-right__item'>
                        {new Date(timestamp).toLocaleDateString("en-us")}
                    </div>
                    
                    <div className='video-details-right__item__likes'>
                    <img src={likesIcon} alt="views icon" />{likes}
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