import './UploadPage.scss';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';

function UploadPage() {
    return (
        <>
            <h2 className='upload-title'>Upload Video</h2>
            <p className='upload-thumbnail'>VIDEO THUMBNAIL</p>
            <img src={uploadPreview} alt="bike handle bars" className='upload-thumbnail__image' />

            <form className="upload">
                <label className="upload__title">TITLE YOUR VIDEO

                    <input type='text' name="title" placeholder="Add a title to your video" className="upload__title__text"></input>

                </label>

                <label className="upload__description">ADD A VIDEO DESCRIPTION

                    <textarea type='text' name="description" placeholder="Add a description to your video" className="upload__description__text"></textarea>

                </label>

                <Link to='/' >
                    <button className='upload__button'>PUBLISH</button>
                </Link>

                <Link to='/' >
                    <p className='upload__cancel'>CANCEL</p>
                </Link>


            </form>

        </>
    )
}

export default UploadPage;