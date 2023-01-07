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
// import videos from './data/videos.json';



let selected = {};

// App Component Function
function App() {
  
  // useState that takes in the Video Data 
  const [videosData, setVideoData] = useState(videoData[0].title);
  
  
  const updatedVid = () => {
    setVideoData(selected)
  }


  ///////// click event  ////////////
  const clickHandler = (e) => {
    const newSelectedVideo = e.target.id

    let select = videoData.filter(vid => {
      return vid.id === newSelectedVideo
    })

    selected = select
    updatedVid()
    console.log(videosData)
  }


  return (
    <>
      <Header />
       <MainVideo mainVideo = {videoData[0]}  />
      <JoinConvo commentsData = {commentsData} />

      <Sidebar clickHandler={clickHandler} />
    </>
  );
}

export default App;