import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';

function VideoDetails(props) {

    return (
        <section className='video-details' key={props.id}>
            <h2 className='video-details__title'>{props.title}</h2>

                <div className='video-details-left'>
                    <div className='video-details-left__item'>
                        By {props.channel}
                    </div>
                    <div className='video-details-left__item__views'>
                    <img src={viewsIcon} alt="views icon" />    {props.views}
                    </div>
                </div>

                <div className='video-details-right'>
                    <div className='video-details-right__item'>
                        {new Date(props.timestamp).toLocaleDateString("en-us")}
                    </div>
                    
                    <div className='video-details-right__item__likes'>
                    <img src={likesIcon} alt="views icon" />{props.likes}
                    </div>
                </div>

            <div>
                <p className='video-details__description'>
                    {props.description}
                </p>
                <h6 className='number-comments'>
                    {props.numberOfComments.length} Comments
                </h6>
            </div>


        </section>
    )
}


export default VideoDetails;