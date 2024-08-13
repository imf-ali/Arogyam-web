import styles from '../../styles/AdminPage/HomeEdit.module.css';
import Button from '../../utils/Button';
import InputField from '../../utils/InputField';

const EditHomeHeader = () => {
  return (
    <div className={styles.editHeader}>
      <h2>Edit header</h2>
      <InputField
        inputType='text'
        labelName='Header Name'
        placeholderText='Enter Header Data'
      />
      <Button
        text="Save header"
        backgroundColor='#3c6b3d'
        width='30%'
      />
    </div>
  )
}

export default EditHomeHeader;