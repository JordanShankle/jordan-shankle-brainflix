// Sass
import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import UploadPage from './pages/UploadPage/UploadPage';


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



   // Click Event
  const clickHandler = (id) => {

    let selected = videosDetails.find(video => {
      return video.id === id
    })

    setSelectedVideoDetails(selected)
  }


  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/upload' element={<UploadPage selectedVideo={selectedVideoDetails}/>} />
      </Routes>


      {/* <MainVideo mainVideo={selectedVideoDetails} />
      <JoinConvo selectedVideo={selectedVideoDetails} />
      <Sidebar clickHandler={clickHandler} selectedVideo={selectedVideoDetails}  /> */}


    </Router>
  );
}

export default App;