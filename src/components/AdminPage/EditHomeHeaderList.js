import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/AdminPage/HomeEdit.module.css';
import { webState } from '../../store/WebDataStore/WebDataContext';
import EditableDiv from '../../utils/EditableDiv';
import InputField from '../../utils/InputField';
import Button from '../../utils/Button';
import { useState } from 'react';
import { updateClinicData } from '../../store/AdminDataStore/AdminDataApi';

const EditHomeHeaderList = () => {
  const { descBody } = useSelector(webState);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateClinicData({ body: [ text ] }))
    setText('');
  }
  return (
    <div className={styles.editHeaderList}>
      <h2>Edit header list</h2>
      {descBody.map((data, ind) => <EditableDiv key={ind} text={data} />)}
      <div className={styles.inputDiv}>
        <InputField 
          inputType='text' 
          placeholderText='Add list item' 
          value={text}
          setText={setText}
        />
        <Button 
          text='Add' 
          backgroundColor='#3c6b3d' 
          width='30%' 
          handleClick={handleSave}
        />
      </div>
    </div>
  )
}

export default EditHomeHeaderList;