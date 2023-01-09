import Comments from '../Comments/Comments';
import './JoinConvo.scss';


const JoinConvo = ({commentsData}) => {
    
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
        );
};


export default JoinConvo;