import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import styles from '../../styles/HomePage/HomeBody.module.css';
import { IoIosArrowDropright } from "react-icons/io";

const WhyUs = () => {
  const { descHeading, descBody } = useSelector(webState);

  return (
    <div className={styles.whyUs}>
      <div className={styles.title}>{descHeading}</div>
      {descBody.map((data, ind) => (
        <div key={ind} className={styles.whyUsItem}>
          <IoIosArrowDropright />
          <div>{data}</div>
        </div>
      ))}
    </div>
  );
}

export default WhyUs;