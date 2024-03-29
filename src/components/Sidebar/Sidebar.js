import './Sidebar.scss';
import SideBarVid from '../SideBarVid/SideBarVid';

function Sidebar (props) {

 // filter all videos so we don't show the selected vid thumbnail
 const filteredVids = props.videos.filter(vid => vid.id !== props.selectedVideo.id)
    
    return (
        <section className='sidebar'>
            
            <p className='sidebar-title'>NEXT VIDEOS</p>
            
            {filteredVids.map((video) => 
                
                <SideBarVid 
                image = {video.image}
                title = {video.title}
                channel = {video.channel}
                key = {video.id}
                videoId = {video.id}
                />
            )}
        
        </section>

    )
};


export default Sidebar;