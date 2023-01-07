function Video (props) {
    return (
        <video 
        className='main-video' 
        poster={props.image}
        controls />
        
        )
};

export default Video;