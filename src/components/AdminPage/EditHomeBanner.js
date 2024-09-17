import Button from '../../utils/Button';
import styles from '../../styles/AdminPage/HomeEdit.module.css';
import { useEffect, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Slider from '@mui/material/Slider';
import FileInput from '../../utils/FileInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateClinicData } from '../../store/AdminDataStore/AdminDataApi';
import { webState } from '../../store/WebDataStore/WebDataContext';

const EditHomeBanner = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const { bannerUrl } = useSelector(webState);
  const [image, setImage] = useState(undefined);
  const [bannerImg, setBannerImg] = useState(bannerUrl);
  const [showModal, setShowModal] = useState(false);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    setBannerImg(bannerUrl);
  }, [bannerUrl])

  const handleSlider = (event, value) => {
    setZoom(value);
  }

  const setFileInput = (e) =>{
    setImage(e.target.files[0]);
    setShowModal(true);
    e.target.value = '';
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handlePreview = () => {
    const dataURL = editorRef.current.getImage().toDataURL();
    setBannerImg(dataURL);
    setShowModal(false);
  }

  const convertBase64ToFile = (base64) => {
    const base64String = base64.replace(/^data:image\/\w+;base64,/, "");
    const byteCharacters = atob(base64String);

    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    const file = new File([blob], 'bannerUrl.png', { type: 'image/png' });

    return file;
  }

  const handleSave = () => {
    const file = convertBase64ToFile(bannerImg)
    const formData = new FormData();
    formData.append("bannerUrl", file);
    formData.append("filename", 'bannerUrl.png');
    dispatch(updateClinicData({ formData }));
  }

  return (
    <div className={styles.editBanner}>
      <h2>Edit Banner</h2>
      <div className={styles.imgDiv}>
        <img src={bannerImg} alt='banner' />
      </div>
      <div className={styles.btnDiv}>
        <FileInput
          labelName="Change Image"
          setFileInput={setFileInput}
        />
        <Button
          text="Save Image"
          backgroundColor='#3c6b3d'
          width='15%'
          handleClick={handleSave}
        />
      </div>
      {showModal && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.cropper}>
            <AvatarEditor
              ref={editorRef}
              image={image}
              width={1180}
              height={215}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
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
                text="Preview"
                backgroundColor='#3c6b3d'
                width='15%'
                handleClick={handlePreview}
              />
              <Button
                text="Cancel"
                backgroundColor='#be4141'
                width='15%'
                handleClick={handleCancel}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EditHomeBanner;