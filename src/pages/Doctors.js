import styles from '../styles/Doctors/Doctors.module.css';
import ladyDoctor from '../assets/ladyDoctor.jpg';
import { IoMdSchool } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";

const Doctors = () => {
  return (
    <div className={styles.DoctorDiv}>
      {/* <h1 className={styles.heading}>Our Doctors</h1> */}
      <div className={styles.mainPara}>
        <div className={styles.firstDiv}>
          <img className={styles.crop} src={ladyDoctor} alt='ladyDoctor' />
        </div>
        <div className={styles.secondPara}>
          <div>
            <h2>Dr. Kajal Kumari</h2>
          </div>
          <div className={styles.dataDiv}>
            <div className={styles.row}>
              <div>
                <IoMdSchool size={30} />
              </div>
              <div>
                <div className={styles.title}>Qualification</div>
                <div>BHMS</div>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <FaUserDoctor size={30} />
              </div>
              <div>
                <div className={styles.title}>Experience</div>
                <div>Acute and Chronic diseases</div>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <IoLocation size={30} />
              </div>
              <div>
                <div className={styles.title}>Branch</div>
                <div>Manpur</div>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <FaLanguage size={30} />
              </div>
              <div>
                <div className={styles.title}>Language</div>
                <div>English, Hindi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Speciality</h2>
      Dermatology, Hair Specialist, Skin Specialist
      <h2>About me</h2>
      <div>
        <p>Dr. Kajal Kumari is a experienced and qualified doctor. She Has done Bachelor in Homoeopathic Medicine and Surgery (BHMS). Dr.Kajal is passionate about providing best treatments to her patients. She has Professional experience in acute as well as chronic ailments. She takes a comprehensive approach to healthcare, addressing all aspects of her patients. She belives in natural healing by Homoeopathy.</p>
        <p>She deals with Numerous Health Issues like hair problems, skin problems, upper respiratory problems, lower respiratory problems, jaundice, hypertension, baldness, hepatitis, haemorrhoids, pain management, cervical spondylitis, earache, bronchial asthma, gout, anal fissure, herpes, anemia, gastritis, dengue, insomnia, thyroid disorder, joint pain, allergic rhinitis, asthma, warts, piles, migraine, arthritis, obesity, infertility, musculoskeletal diseases, gastro-intestinal issues, female reproductive problems, stress management, neurological problems, child health</p>
        <p>She examines Patients Carefully and gets proper patient detailed disease history for giving best possible treatments to the patients.</p>
        <p>Dr. Kajal registered with Board of Homoeopathic Medicine, Bihar with Registration no. - 35515.</p>
      </div>
    </div>
  )
}

export default Doctors;