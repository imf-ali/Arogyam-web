import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import styles from '../../styles/HomePage/HomeBody.module.css';
import { IoIosArrowDropright } from "react-icons/io";

const WhyUs = () => {
  const { whyUsData } = useSelector(webState);

  return (
    <div className={styles.whyUs}>
      <div className={styles.title}>Why Arogyam</div>
      {whyUsData.map((data, ind) => (
        <div className={styles.whyUsItem}>
          <IoIosArrowDropright />
          <div key={ind}>{data}</div>
        </div>
      ))}
    </div>
  );
}

export default WhyUs;