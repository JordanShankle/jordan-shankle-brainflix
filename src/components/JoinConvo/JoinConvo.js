import { useState } from 'react';
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
                    <label>JOIN THE CONVERSATION
                        <textarea name="comment" placeholder="Add a new comment" className="add-comment"></textarea>
                    </label>

                    {/* Comment Submit Button */}
                    <div className="comment__button-container">
                        <input type="submit" value="COMMENT" className="comment__button" />
                    </div>

                </div>
            </form>

            <Comments comments={selectedVideo.comments} />

            {/* {
                videosDetails.map((vidDetails) => {
                    return (
                        <Comments comments={vidDetails.comments} />
                    )
                })
            } */}
        </section>
    );
};


export default JoinConvo;