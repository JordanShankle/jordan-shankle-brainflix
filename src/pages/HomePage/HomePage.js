// imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MainVideo from '../../components/MainVideo/MainVideo';
import JoinConvo from '../../components/JoinConvo/JoinConvo';
import Sidebar from '../../components/Sidebar/Sidebar';

// API
const BASE_API_URL = 'https://project-2-api.herokuapp.com/';
const API_KEY = 'eaf1ac38-9344-4d16-9027-16b9fd369494';
const query = "videos";
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;


function HomePage() {

  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null)

  
  // Grabs the Videos on Mount
  useEffect(() => {
    const getVideos = async () => {
      const { data } = await axios.get(
        `${url}`
      );
      setVideos(data);
    }

    getVideos();
  }, [])


  // Re-renders after a video is selected in the Sidebar
  useEffect(() => {

    const id = videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'
    const url = `${BASE_API_URL}videos/${id}?api_key=${API_KEY}`

    const getVideo = async () => {
      const { data } = await axios.get(
        `${url}`
      );

      setSelectedVideoDetails(data);
    }

    getVideo()

  }, [videoId, videos])



  // Loading state while Video's data loads
  if (!videos || !selectedVideoDetails) {
    return <div className="loading">loading...</div>
  }



  return (
    <main>

      <MainVideo mainVideo={selectedVideoDetails} />
      <JoinConvo selectedVideo={selectedVideoDetails} />
      <Sidebar selectedVideo={selectedVideoDetails} videos={videos} />

    </main>
  )
}

export default HomePage;