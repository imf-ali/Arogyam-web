import banner from '../../assets/banner.png';
import Button from '../../utils/Button';
import styles from '../../styles/AdminPage/HomeEdit.module.css';

const EditHomeBanner = () => {
  return (
    <div>
      <h2>Edit Banner</h2>
      <div className={styles.imgDiv}>
        <img src={banner} alt='banner' />
      </div>
      <div className={styles.btnDiv}>
        <Button 
          text="Change Image" 
          backgroundColor='#1c588c' 
          width='15%' 
        />
        <Button 
          text="Preview" 
          backgroundColor='#2f6fa5' 
          width='15%' 
        />
        <Button 
          text="Save Image" 
          backgroundColor='#3c6b3d' 
          width='15%' 
        />
      </div>
    </div>
  )
}

export default EditHomeBanner;