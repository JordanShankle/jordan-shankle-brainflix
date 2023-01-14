import './MainVideo.scss';
import Video from '../Video/Video';
import VideoDetails from '../VideoDetails/VideoDetails';


const MainVideo = ({mainVideo}) => {

    return (
        <>
            
            <div className='main-video-container'>
                <Video image={mainVideo.image}
                />
            {/* <img src={scrubIcon} alt='scrub' /> */}
            </div>


            <VideoDetails 
                title={mainVideo.title}
                channel={mainVideo.channel}
                timestamp={mainVideo.timestamp}
                views={mainVideo.views} 
                likes={mainVideo.likes} 
                description={mainVideo.description}
                numberOfComments={mainVideo.comments} 
            />

        </>
    )
};


export default MainVideo;