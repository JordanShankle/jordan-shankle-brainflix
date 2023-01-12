// imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
// import Video from "../../components/Video/Video";
// import VideoDetails from "../../components/VideoDetails/VideoDetails";

// Base URL
const BASE_API_URL = 'https://project-2-api.herokuapp.com/';

// API Key
const API_KEY = 'eaf1ac38-9344-4d16-9027-16b9fd369494';

// Query
const query = "videos";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(`Use this url: ${url}`)



const VideoView = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});

    useEffect(() => {
        const getVideo = async () => {
            const { data } = await axios.get(
                `${url}${videoId}`
            );
            setVideo(data);
        }

        getVideo();
    }, [])
    
    
    return (
        <>
            <h1>This is where the videos go.</h1>
        </>
    )
}

export default VideoView;
