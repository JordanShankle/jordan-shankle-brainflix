import './SideBarVid.scss';

function SideBarVid (props) {
    
    return (
        <section className='video' onClick={props.clickHandler} id={props.id}>
            
            <div className='video-image-container'>
                <img className='video__image' src={props.image} alt="video"/>
            </div>

            <div className="video-description">
                <h6 className="video-description__title">{props.title}</h6>
                <p className="video-description__channel">{props.channel}</p>
            </div>
        
        </section>    
    )
};

export default SideBarVid;