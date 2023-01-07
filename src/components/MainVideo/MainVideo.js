import './MainVideo.scss';
import Video from '../Video/Video';
import VideoDetails from '../VideoDetails/VideoDetails';


const MainVideo = ({mainVideo}) => {

console.log(mainVideo.image)

    return (
        <section className='main-video-container'>
            
            <Video image={mainVideo.image}/>
            <VideoDetails 
                title={mainVideo.title}
                channel={mainVideo.channel}
                timestamp={mainVideo.timestamp}
                views={mainVideo.views} 
                likes={mainVideo.likes} 
                description={mainVideo.description} 
                />

        </section>
    )
};


export default MainVideo;