// imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MainVideo from '../../components/MainVideo/MainVideo';
import JoinConvo from '../../components/JoinConvo/JoinConvo';
import Sidebar from '../../components/Sidebar/Sidebar';





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

  console.log(`rednering homepage`)

  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null)

  useEffect(() => {
    const getVideos = async () => {
      const { data } = await axios.get(
        `${url}`
      );
      setVideos(data);
      console.log(data);
    }

    getVideos();
  }, [])

  useEffect(() => {

    console.log(videoId)
    const id = videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'
    const url = `${BASE_API_URL}videos/${id}?api_key=${API_KEY}`

    const getVideo = async () => {
      const { data } = await axios.get(
        `${url}`
      );

      setSelectedVideoDetails(data);
    }

    getVideo()



  }, [videoId])





  // For the Comments


  // // Click Event
  // const clickHandler = (id) => {

  //   let selected = videosDetails.find(video => {
  //     return video.id === id
  //   })

  //   setSelectedVideoDetails(selected)
  // }

 

  if (!videos || !selectedVideoDetails){
return <div>loading...</div>
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