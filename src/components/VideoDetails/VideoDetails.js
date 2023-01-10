import './VideoDetails.scss';

function VideoDetails(props) {
    return (
        <section className='video-details'>
            <h2 className='video-details__title'>{props.title}</h2>

                <div className='video-details-left'>
                    <div className='video-details-left__item'>
                        By {props.channel}
                    </div>
                    <div className='video-details-left__item__views'>
                        {props.views}
                    </div>
                </div>

                <div className='video-details-right'>
                    <div className='video-details-right__item'>
                        {new Date(props.timestamp).toLocaleDateString("en-us")}
                    </div>
                    
                    <div className='video-details-right__item__likes'>
                        {props.likes}
                    </div>
                </div>

            <div>
                <p className='video-details__description'>
                    {props.description}
                </p>
                {/* <h6>{props.comments}</h6> */}
            </div>


        </section>
    )
}


export default VideoDetails;