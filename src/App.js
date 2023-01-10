// Sass
import './App.scss';
import { useState } from 'react';


// Components
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import JoinConvo from './components/JoinConvo/JoinConvo';
import Sidebar from './components/Sidebar/Sidebar';


// Json Data for Videos 
import videoData from './data/video-details.json';
import videosDetails from './data/video-details.json';



let selectedVid = {};

// App Component Function
function App() {
  
  // For the Comments
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(videosDetails[0])
  
  // useState that takes in the Video Data 
  const [videosData, setVideoData] = useState(videoData[0].title);
  const [mainVideosData, setMainVideoData] = useState(videoData[0]);
  
  const updatedVid = () => {
    setVideoData(selectedVid)
    // setSelectedVideoDetails => based on id... FIND in videosDetails where videosDetails id === selectedVid.id
  }


  ///////// click event  ////////////
  const clickHandler = (event) => {
    const newSelectedVideo = event.target.id

    let select = videosData.filter(video => {
      return video.id === newSelectedVideo
    })

    setMainVideoData(videoData[0]);

    updatedVid()
    console.log(newSelectedVideo)
  }


  return (
    <>
      <Header />
      <MainVideo mainVideo = {mainVideosData}  />
      <JoinConvo selectedVideo = {selectedVideoDetails} />

      <Sidebar  clickHandler={clickHandler} />
    </>
  );
}

export default App;