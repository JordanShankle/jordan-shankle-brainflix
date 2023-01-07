// Sass
import './App.scss';


// Components
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import JoinConvo from './components/JoinConvo/JoinConvo';
// import Sidebar from './components/Sidebar/Sidebar';


// Json Data for Videos 
import videoData from './data/video-details.json';
import commentsData from './data/video-details.json';
// import Videos from './data/videos.json';



// App Component Function
function App() {

  // const [videoData, setVideoData] = useState()
  
  // put the selected video in state
  
  // have a function in App.js that changes the Sidebar & pass to Sidear with props 


  return (
    <>
      <Header />
      <MainVideo mainVideo = {videoData[0]} />
      <JoinConvo commentsData = {commentsData} />

      {/* <Sidebar SideBar={SideBarVideos} /> */}
    </>
  );
}

export default App;