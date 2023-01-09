import './Comments.scss';

const Comments = (props) => {

    const comment = props.comment;

    return (
        <>
        
        {comment.map((comment) => 
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

            )}   
        </>    
    )
}


export default Comments;
