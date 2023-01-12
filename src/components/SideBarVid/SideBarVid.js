import './SideBarVid.scss';

function SideBarVid({ videoId, image, title, channel }) {
    console.log(videoId);


    return (
        <section className='video' onClick={() => {
            videoId.clickHandler(videoId)
        }} id={videoId} >

            <div className='video-image-container'>
                <img className='video__image' src={image} alt="video" />
            </div>

            <div className="video-description">
                <h6 className="video-description__title">{title}</h6>
                <p className="video-description__channel">{channel}</p>
            </div>

        </section>
    )
};

export default SideBarVid;