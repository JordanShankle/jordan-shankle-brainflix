import './MainVideo.scss';
import mainVideo from '../../data/video-details.json';
// import { useState } from 'react';




function MainVideo() {

    const videosData = mainVideo;
    // const [videosData, setVideosData] = useState(videos);

    return (

        <section>
            <video className='main-video' controls >
                <source src={videosData.image} />
            </video>

                {/* Title */}
            <h2>{videosData.title}</h2>

                {/* Channel */}
            <div> {videosData.channel} </div>

                {/* Timestamp */}
            <div> {videosData.timestamp} </div>
            
                {/* Views */}
            <div> {videosData.views} </div>

                {/* Likes */}
            <div> {videosData.likes} </div>

                {/* Description */}
            <div> {videosData.description} </div>
        </section>

    )
};



export default MainVideo;

// PseudoCode
// Import the video data from the video.json file
// Store the video data in a variable -- videoData
// 
// 
// 
