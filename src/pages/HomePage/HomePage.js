// imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MainVideo from '../../components/MainVideo/MainVideo';
import JoinConvo from '../../components/JoinConvo/JoinConvo';
import Sidebar from '../../components/Sidebar/Sidebar';


function HomePage() {

  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null)

  
  // Grabs the Videos on Mount
  useEffect(() => {
    const getVideos = async () => {
      const { data } = await axios.get(
        'http://localhost:8080/videos'
      );
      setVideos(data);
    }

    getVideos();
  }, [])


  // Re-renders after a video is selected in the Sidebar
  useEffect(() => {

    const id = videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'
    const url = `http://localhost:8080/videos/${id}`

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