// imports
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useState } from "react";

// Components
import MainVideo from "../../components/MainVideo/MainVideo";
import JoinConvo from "../../components/JoinConvo/JoinConvo";
import Sidebar from "../../components/Sidebar/Sidebar";
import videosDetails from "../../components/VideoDetails/VideoDetails";

// API //
const BASE_API_URL = 'https://project-2-api.herokuapp.com/';
const API_KEY = 'eaf1ac38-9344-4d16-9027-16b9fd369494';
const query = "videos";
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;
console.log(`Use this url: ${url}`)



const VideoPage = () => {

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

export default VideoPage;
