import './UploadPage.scss';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link, useNavigate } from 'react-router-dom';

function UploadPage() {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/')
        alert('Upload successful!')
    }

    return (
        <>
            <h2 className='upload-title'>Upload Video</h2>

            <p className='upload-thumbnail__title'>VIDEO THUMBNAIL</p>


            <section className='upload-section'>

                <div className='upload-thumbnail'>
                    <img src={uploadPreview} alt="bike handle bars" className='upload-thumbnail__image' />
                </div>

                <form className="upload" onSubmit={handleSubmit}>

                    <label className="upload__title">TITLE YOUR VIDEO

                        <input type='text' name="title" placeholder="Add a title to your video" className="upload__title__text"></input>

                    </label>

                    <label className="upload__description">ADD A VIDEO DESCRIPTION

                        <textarea type='text' name="description" placeholder="Add a description to your video" className="upload__description__text" ></textarea>

                    </label>


                    <div className='upload-buttons-container'>
                        <div className='upload__button-container'>
                            <button className='upload__button' >PUBLISH</button>
                        </div>


                        <div className='upload-cancel-container'>
                            <Link className='upload__cancel' to={"/"}>CANCEL</Link>
                        </div>
                    </div>

                </form>
            </section>

        </>
    )
}

export default UploadPage;