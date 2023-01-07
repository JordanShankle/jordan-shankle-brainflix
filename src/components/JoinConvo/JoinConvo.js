import Comments from '../Comments/Comments';
import './JoinConvo.scss';


const JoinConvo = ({commentsData}) => {
    
    console.log(commentsData)
    
    
    return (
        <>
        {
            commentsData.map(( comment ) => {
            return (
                <Comments comment = { comment.comments  }  />
                    
                )
            })
        }
        </>
        // form
        );
};


        // < Comments
        // key={comment.id}
        // name={comment.name}
        // comment={comment.comment}
        // date={comment.timestamp} />
        // )

export default JoinConvo;