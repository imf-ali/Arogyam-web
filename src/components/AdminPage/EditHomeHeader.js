import { useState } from 'react';
import styles from '../../styles/AdminPage/HomeEdit.module.css';
import Button from '../../utils/Button';
import InputField from '../../utils/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { webState } from '../../store/WebDataStore/WebDataContext';
import { updateClinicData } from '../../store/AdminDataStore/AdminDataApi';

const EditHomeHeader = () => {
  const { descHeading } = useSelector(webState);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", text);
    dispatch(updateClinicData({ formData }));
    setText('');
  }
  return (
    <div className={styles.editHeader}>
      <h2>Edit header</h2>
      <h3>{descHeading}</h3>
      <InputField
        inputType='text'
        placeholderText='Enter Header Data'
        value={text}
        setText={setText}
      />
      <Button
        text="Save header"
        backgroundColor='#3c6b3d'
        width='40%'
        handleClick={handleSave}
      />
    </div>
  )
}

export default EditHomeHeader;