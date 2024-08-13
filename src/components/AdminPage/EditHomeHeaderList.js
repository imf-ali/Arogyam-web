import { useSelector } from 'react-redux';
import styles from '../../styles/AdminPage/HomeEdit.module.css';
import { webState } from '../../store/WebDataContext';
import EditableDiv from '../../utils/EditableDiv';
import InputField from '../../utils/InputField';
import Button from '../../utils/Button';

const EditHomeHeaderList = () => {
  const { whyUsData } = useSelector(webState);
  return (
    <div className={styles.editHeaderList}>
      <h2>Edit header list</h2>
      {whyUsData.map((data, ind) => <EditableDiv key={ind} text={data} />)}
      <div className={styles.inputDiv}>
        <InputField inputType='text' placeholderText='Add list item' />
        <Button text='Add' backgroundColor='#7aa57b' width='30%' />
      </div>
    </div>
  )
}

export default EditHomeHeaderList;