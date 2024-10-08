import styles from '../styles/utils/Input.module.css';

const FileInput = ({ labelName, id, setFileInput }) => {
  return (
    <div className={styles.inputDiv}>
      <label
        htmlFor={id}
        className={styles.customFileUpload}
      >
        {labelName}
      </label>
      <input
        id={id}
        type="file"
        accept='image/*'
        onChange={setFileInput}
      />
    </div>
  );
}

export default FileInput;