// import { useState } from 'react';
import './Sidebar.scss';
import videos from '../../data/videos.json';
import SideBarVid from '../SideBarVid/SideBarVid';

function Sidebar (props) {
    // const [sidebar, setSideBar] = useState('')
// click event handler goes here that takes an event handler from App.js

    return (
        <>
            <p className='next-vid-title'>NEXT VIDEOS</p>
            {videos.map((video) => 
                <SideBarVid 
                image = {video.image}
                title = {video.title}
                channel = {video.channel}
                key = {video.id}
                id = {video.id}
                clickHandler = {props.clickHandler}
                />
            )}
        
        </>

    )
};


export default Sidebar;