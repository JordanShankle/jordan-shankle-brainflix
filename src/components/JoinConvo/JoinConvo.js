import Comments from '../Comments/Comments';
import './JoinConvo.scss';


const JoinConvo = ({ selectedVideo }) => {


    return (
        <section className="conversation-container">


            {/* Form Section */}
            <form className="form">
                <div className="form__image-container">
                    <div className="form__image"></div>
                </div>

                {/* Name input */}
                <div className="form__input">

                    {/* Comment input */}
                    <label className='join-convo'>JOIN THE CONVERSATION
                        <textarea name="comment" placeholder="Add a new comment" className="add-comment"></textarea>
                    </label>

                    {/* Comment Submit Button */}
                    
                        <button type="submit" className="comment__button">COMMENT</button>
                    

                </div>
            </form>

            <Comments comments={selectedVideo.comments} />

        </section>
    );
};


export default JoinConvo;