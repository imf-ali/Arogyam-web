import styles from '../styles/utils/Input.module.css';

const FileInput = ({ labelName, value, setFileInput }) => {
  return (
    <div className={styles.inputDiv}>
      <label
        htmlFor="file-upload"
        className={styles.customFileUpload}
      >
        {labelName}
      </label>
      <input
        id="file-upload"
        type="file"
        accept='image/*'
        onChange={setFileInput}
      />
    </div>
  );
}

export default FileInput;