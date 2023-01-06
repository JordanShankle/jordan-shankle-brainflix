import './Sidebar.scss';
import Videos from '../../data/videos.json';

function Sidebar () {
    
    return (
        <section>

            {
                Videos.map( video => {
                    return (
                        <div className='video'>
                            <h3>
                            {video.title}
                            </h3>
                            <p>
                            {video.channel}
                            </p>
                            <img src={video.image} alt="hi" className='video__image' />
                        
                        </div>
                    )
                } )
            }
        </section>
    )
};


export default Sidebar;