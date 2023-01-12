import './UploadPage.scss';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("test");
        

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
        }



    return (
        <>
            <h2 className='upload-title'>Upload Video</h2>
            <p className='upload-thumbnail'>VIDEO THUMBNAIL</p>
            <img src={uploadPreview} alt="bike handle bars" className='upload-thumbnail__image' />

            <form className="upload" onSubmit={(event) => handleSubmit(event)}>
                <label className="upload__title">TITLE YOUR VIDEO

                    {/* onChange={() => setTitle(e.target.value)} */}
                    <input type='text' name="title" placeholder="Add a title to your video" className="upload__title__text" onChange={(event) => setTitle(event.target.value)}></input>

                </label>

                <label className="upload__description">ADD A VIDEO DESCRIPTION

                    {/* onChange={() => setDescription(e.target.value)} */}
                    <textarea type='text' name="description" placeholder="Add a description to your video" className="upload__description__text" onChange={(event) => setDescription(event.target.value)}></textarea>

                </label>


                {/* Add a SetTimeout to this onClick */}
                <button className='upload__button' onClick={() => navigate("/")}>PUBLISH</button>


                <Link to='/' >
                    <p className='upload__cancel'>CANCEL</p>
                </Link>


            </form>

        </>
    )
}

export default UploadPage;