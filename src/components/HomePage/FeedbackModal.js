import { useRef, useState } from 'react';
import styles from '../../styles/HomePage/FeedbackModal.module.css';
import InputField from '../../utils/InputField';
import Button from '../../utils/Button';
import { submitFeedback } from '../../store/api';
import FileInput from '../../utils/FileInput';
import AvatarEditor from 'react-avatar-editor';
import Slider from '@mui/material/Slider';

const FeedbackModal = ({ setShowModal }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [zoom, setZoom] = useState(5);
  const [image, setImage] = useState(undefined);
  const editorRef = useRef(null);
  const [beforeImage, setBeforeImage] = useState('');
  const [afterImage, setAfterImage] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  console.log(activeImage)

  const setFileInput = (e, currentImage) =>{
    console.log(currentImage)
    setImage(e.target.files[0]);
    setShowEditor(true);
    setActiveImage(currentImage);
    e.target.value = '';
  }

  const handleSlider = (event, value) => {
    setZoom(value);
  }

  const handleSelect = () => {
    const dataURL = editorRef.current.getImage().toDataURL();
    if(activeImage === 1){
      setBeforeImage(dataURL);
    } else {
      setAfterImage(dataURL);
    }
    setShowEditor(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || feedback === '') {
      setErrorMessage('Please fill in all fields');
      return;
    }
    const res = await submitFeedback(
      name, feedback, beforeImage, afterImage
    );
    if (res.status === 400)
      setErrorMessage(res.data.error);
    else if (res.status === 201) {
      setSuccess('Feedback submitted successfully');
    }
  }
  return (
    <>
      <div className={styles.backdrop} onClick={() => setShowModal(false)} />
      <div className={styles.modal}>
        {success !== '' ? (
          <>
            <div className={styles.success}>{success}</div>
          </>
        ) : (
          showEditor ? (
            <div className={styles.cropper}>
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={350}
                height={350}
                border={50}
                color={[200, 200, 200, 0.6]} // RGBA
                scale={zoom/8}
                rotate={0}
              />
              <div className={styles.slider}>
                <Slider
                  style={{
                    width: '50%'
                  }}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  value={zoom}
                  min={1}
                  max={10}
                  step={0.1}
                  onChange={handleSlider}
                />
              </div>
              <div className={styles.otherBtnDiv}>
                <Button
                  text="Confirm"
                  backgroundColor='#3c6b3d'
                  width='25%'
                  handleClick={handleSelect}
                />
              </div>
            </div>
          ) : (
            <>
              <div className={styles.modalHeading}>Give Your Feedback</div>
              <InputField 
                labelName="Name" 
                inputType="text" 
                placeholderText="Enter your name" 
                value={name} 
                setText={setName}
              />
              <InputField 
                labelName="Feedback" 
                inputType="text" 
                placeholderText="Enter your feedback" 
                value={feedback} 
                setText={setFeedback}
                isTextArea={true}
              />
              <div className={styles.imgCapture}>
                <div className={styles.fileDiv}>
                  <div className={styles.imgDiv}>
                    <img src={beforeImage} alt='before-image' />
                  </div>
                  <FileInput 
                    id="before-image-upload"
                    labelName="Before Image"
                    setFileInput={(e) => setFileInput(e, 1)} 
                  />
                  {/* <FaCheckCircle /> */}
                </div>
                <div className={styles.fileDiv}>
                  <div className={styles.imgDiv}>
                    <img src={afterImage} alt='after-image' />
                  </div>
                  <FileInput 
                    id="after-image-upload"
                    labelName="After Image"
                    setFileInput={(e) => setFileInput(e, 2)} 
                  /> 
                  {/* <FaCheckCircle /> */}
                </div>
              </div>
              {errorMessage !== '' && <div className={styles.errorMessage}>{errorMessage}</div>}
              <div className={styles.btnDiv}>
                <Button backgroundColor="rgb(60, 107, 61)" text="Submit" width="35%" handleClick={handleSubmit} />
              </div>
            </>
          )
        )}
      </div>
    </>
  )
}

export default FeedbackModal;