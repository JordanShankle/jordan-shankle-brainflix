import './Comments.scss';

const Comments = (props) => {

    console.log(props)
            return (
                <section className='comments-section'>

                    <article className='comment-container'>

                        <div className='comment__card-pic-container'>
                            <div className='comment__card__pic'></div>
                        </div>

                        <div className='comment__card'>
                            <div className='comment__text-container'>
                                <p className='comment__name'>{props.name}</p>
                                <p className='comment__date'>{props.timestamp}</p>
                            </div>
                            <p className='comment__text'>{props.comments}</p>
                        </div>

                    </article>

                </section>

            )    

}


export default Comments;

// PseudoCode:
// Import the Comments data from the video-details.json file
// Store the Comments data in a variable 
// .map through the comments data 


// const Comments = CommentDetails;
// Comments.map((details) => <Comments key={details.comments.id} name={details.comments.name} comment={details.comments.comment} timestamp={details.comments.timestamp} />);
