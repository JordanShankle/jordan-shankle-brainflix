// import { useState } from 'react';
// import './Sidebar.scss';


// function Sidebar (props) {
    
//     const [sidebar, setSideBar] = useState(props.sidebar)

// Deconstruct the json data 
// let { title, channel, image} = sideBar; 

//     return (
//         <section className='next-video-container'>

//             <h2 className='next-video-title'>Next Title</h2>
//             {
//                 sidebar.map((video) => {
                    
//                     return (
                    
//                         <div className='video'>
                        
//                             <img src={video.image} alt="video" className='video__image' />
                        
//                             <h3>{video.title}</h3>
                        
//                             <p>{video.channel}</p>
                        
//                         </div>
//                     )
//                 } )
//             }
//         </section>
//     )
// };


// export default Sidebar;