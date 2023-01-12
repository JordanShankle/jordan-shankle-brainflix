import { useState } from 'react';

// Components
import MainVideo from '../../components/MainVideo/MainVideo';
import JoinConvo from '../../components/JoinConvo/JoinConvo';
import Sidebar from '../../components/Sidebar/Sidebar';

// Videos Data from the Json file
import videosDetails from '../../data/video-details.json';

function HomePage() {

 // For the Comments
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(videosDetails[0])


  // Click Event
 const clickHandler = (id) => {

   let selected = videosDetails.find(video => {
     return video.id === id
   })

   setSelectedVideoDetails(selected)
 }
    
    return (
       <main>
        
        <MainVideo mainVideo={selectedVideoDetails} />
        <JoinConvo selectedVideo={selectedVideoDetails} />
        <Sidebar clickHandler={clickHandler} selectedVideo={selectedVideoDetails}  />

       </main>
    )
}

export default HomePage;