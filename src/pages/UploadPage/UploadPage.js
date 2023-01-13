import './UploadPage.scss';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link, useNavigate } from 'react-router-dom';

function UploadPage() {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");

    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log("test");
        

        // Validate
        // if (!title || !body ) {
        //     alert("Add info")
        //     return;
        // } 

        // // axios post request
        // try {
        //     await axios
        //         .post("add an endpoint", 
        //         {
        //             title: title, 
                    
        //             description: description,
        //         });
            

        //         // Add a SetTimeout to navigate to the HomePage

        // } catch (error) {
        //     console.log(`There was an ${error}`)
        //}



    return (
        <>
            <h2 className='upload-title'>Upload Video</h2>
            
            <p className='upload-thumbnail__title'>VIDEO THUMBNAIL</p>
            
            <div className='upload-thumbnail'>
                <img src={uploadPreview} alt="bike handle bars" className='upload-thumbnail__image' />
            </div>

            <form className="upload">
                <label className="upload__title">TITLE YOUR VIDEO

                    {/* onChange={() => setTitle(e.target.value)} */}
                    <input type='text' name="title" placeholder="Add a title to your video" className="upload__title__text"></input>

                </label>

                <label className="upload__description">ADD A VIDEO DESCRIPTION

                    {/* onChange={() => setDescription(e.target.value)} */}
                    <textarea type='text' name="description" placeholder="Add a description to your video" className="upload__description__text" ></textarea>

                </label>


                {/* Add a SetTimeout to this onClick */}
                
                <div className='upload-buttons-container'>
                    <div className='upload__button-container'>
                        <button className='upload__button' onClick={() => navigate("/")}>PUBLISH</button>
                    </div>


                    <div className='upload-cancel-container'>
                        <Link className='upload__cancel' to={"/"}>CANCEL</Link>
                    </div>
                </div>

            </form>

        </>
    )
}

export default UploadPage;