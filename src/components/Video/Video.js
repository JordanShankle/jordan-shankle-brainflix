function Video({ image }) {
    return (

        <video
            className='main-video'
            poster={image}
            controls
            />

    )
};

export default Video;