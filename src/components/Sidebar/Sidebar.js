// import { useState } from 'react';
import './Sidebar.scss';
import videos from '../../data/videos.json';
import SideBarVid from '../SideBarVid/SideBarVid';

function Sidebar (props) {


// const { videoId } = useParams();
// const [video, setVideo] = useState(null);

// useEffect(() => {
//     const getVideo = async () => {
//         const { data } = await axios.get(
//             `${url}${videoId}`
//             );
//             setVideo(data);
//         }
        
//         getVideo();
//     }, [videoId])
    
    
    // filter all videos so we don't show the selected vid thumbnail
 const filteredVids = videos.filter(vid => vid.id !== props.selectedVideo.id)
    
    return (
        <>
            <p className='next-vid-title'>NEXT VIDEOS</p>
            {filteredVids.map((video) => 
                <SideBarVid 
                image = {video.image}
                title = {video.title}
                channel = {video.channel}
                key = {video.id}
                videoId = {video.id}
                clickHandler = {props.clickHandler}
                />
            )}
        
        </>

    )
};


export default Sidebar;