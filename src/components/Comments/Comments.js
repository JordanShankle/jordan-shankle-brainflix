import './Comments.scss';

const Comments = ({ comments }) => {

    // const comments = props.comments;

    return (

        <section className='comments-section'>
            {comments.map((comment) =>


                <article className='comment-container'>

                    <div className='comment__card-pic-container'>
                        <div className='comment__card__pic'></div>
                    </div>

                    <div className='comment__card'>
                        <div className='comment__text-container'>
                            <p className='comment__name'>{comment.name}</p>
                            <p className='comment__date'>{new Date(comment.timestamp).toLocaleDateString("en-us")}</p>
                        </div>
                        <p className='comment__text'>{comment.comment}</p>
                    </div>

                </article>


            )}

        </section>

    )
}


export default Comments;
