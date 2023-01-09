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
import commentsData from './data/video-details.json';



let selectedVid = {};

// App Component Function
function App() {
  
  // useState that takes in the Video Data 
  const [videosData, setVideoData] = useState(videoData[0].title);
  
  
  const updatedVid = () => {
    setVideoData(selectedVid)
  }


  ///////// click event  ////////////
  const clickHandler = (event) => {
    const newSelectedVideo = event.target.id

    let select = videoData.filter(video => {
      return video.id === newSelectedVideo
    })

    selectedVid = select
    updatedVid()
    console.log(newSelectedVideo)
  }


  return (
    <>
      <Header />
      <MainVideo mainVideo = {videoData[0]}  />
      <JoinConvo commentsData = {commentsData} />

      <Sidebar  clickHandler={clickHandler} />
    </>
  );
}

export default App;