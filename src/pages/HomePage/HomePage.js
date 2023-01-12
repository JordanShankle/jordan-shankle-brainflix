// imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MainVideo from '../../components/MainVideo/MainVideo';
import JoinConvo from '../../components/JoinConvo/JoinConvo';
import Sidebar from '../../components/Sidebar/Sidebar';

// Videos Data from the Json file
import videosDetails from '../../data/video-details.json';


// Base URL
const BASE_API_URL = 'https://project-2-api.herokuapp.com/';

// API Key
const API_KEY = 'eaf1ac38-9344-4d16-9027-16b9fd369494';

// Query
const query = "videos";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(`Use this url: ${url}`)



function HomePage() {

  const { videoId } = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getVideo = async () => {
      const { data } = await axios.get(
        `${url}${videoId}`
      );
      setVideo(data);
      console.log(data);
    }

    getVideo();
  }, [videoId])





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
      <Sidebar clickHandler={clickHandler} selectedVideo={selectedVideoDetails} />

    </main>
  )
}

export default HomePage;