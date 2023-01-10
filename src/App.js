// Sass
import './App.scss';
import { useState } from 'react';

// Components
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import JoinConvo from './components/JoinConvo/JoinConvo';
import Sidebar from './components/Sidebar/Sidebar';

// Json Data for Videos 
import videosDetails from './data/video-details.json';




// App Component Function
function App() {

  // For the Comments
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(videosDetails[0])



  ///////// click event  ////////////
  const clickHandler = (id) => {

    let selected = videosDetails.find(video => {
      return video.id === id
    })

    setSelectedVideoDetails(selected)
  }


  return (
    <>
      <Header />
      <MainVideo mainVideo={selectedVideoDetails} />
      <JoinConvo selectedVideo={selectedVideoDetails} />
      <Sidebar clickHandler={clickHandler} selectedVideo={selectedVideoDetails}  />
    </>
  );
}

export default App;