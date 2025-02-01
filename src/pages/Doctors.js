import React from "react";
import styles from '../styles/Doctors/Doctors.module.css';
import { FaLanguage } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IoMdSchool } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import ladyDoctor from "../assets/ladyDoctor.jpg";

const Doctors = () => {
  return (
    <div className={styles.doctorContainer}>
      <div className={styles.doctorCard}>
        <div className={styles.imageAndInfo}>
          <img className={styles.doctorImage} src={ladyDoctor} alt="Dr. Kajal Kumari" />
          <div className={styles.doctorDetails}>
            <h1>Dr. Kajal Kumari</h1>
            <div className={styles.doctorInfo}>
              <div className={styles.infoItem}>
                <IoMdSchool className={styles.icon} />
                <h3>Qualification: <span>BHMS (Bachelor in Homeopathic Medicine and Surgery)</span></h3>
              </div>
              <div className={styles.infoItem}>
                <FaUserDoctor className={styles.icon} />
                <h3>Experience: <span>Expertise in treating Acute & Chronic Diseases</span></h3>
              </div>
              <div className={styles.infoItem}>
                <IoLocation className={styles.icon} />
                <h3>Branch: <span>Manpur</span></h3>
              </div>
              <div className={styles.infoItem}>
                <FaLanguage className={styles.icon} />
                <h3>Languages Spoken: <span>English, Hindi</span></h3>
              </div>
            </div>
          </div>
        </div>

        <h2>Specialties</h2>
        <ul className={styles.specialties}>
          <li>Dermatology, Hair Specialist, Skin Specialist</li>
        </ul>

        <h2>About me</h2>
        <p>
          I am highly experienced and qualified homeopathic practitioner with a passion for holistic healing.
          I have earned BHMS degree, registered with the Board of Homeopathic Medicine, Bihar (Reg. No. 35515).
        </p>
        <p>
          I took a comprehensive approach to healthcare, ensuring personalized treatment for each patient, and firmly believes
          in natural healing through homeopathy, which focuses on stimulating the body's own immune system.
        </p>

        <h2>Areas of Expertise</h2>
        <ul className={styles.expertiseList}>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Skin & Hair Disorders – Baldness, Acne, Eczema, Psoriasis, Warts, Dermatitis</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Respiratory Issues – Asthma, Allergic Rhinitis, Bronchial Infections</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Gastrointestinal Problems – Gastritis, Jaundice, Hepatitis, Piles, Anal Fissures</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Musculoskeletal Diseases – Joint Pain, Arthritis, Gout, Cervical Spondylitis</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Neurological & Stress-related Disorders – Insomnia, Migraine, Anxiety, Stress Management</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Women's Health & Fertility – PCOD, Infertility, Menstrual Irregularities</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Metabolic & Endocrine Disorders – Thyroid Issues, Hypertension, Obesity, Diabetes</li>
        </ul>

        <h2>Homeopathy: A Revolution in Holistic Healing</h2>
        <p>
          I am highly experienced and qualified homeopathic practitioner with a passion for holistic healing.
          I have earned BHMS degree, registered with the Board of Homeopathic Medicine, Bihar (Reg. No. 35515).
          I have more than years of experience in providing personalized treatment for patients, ensuring the best care in all aspects of homeopathic medicine.
        </p>
        <p>
          I have specializes in treating a wide variety of conditions, ranging from chronic pain management, skin disorders, respiratory diseases, to mental health issues. Dr. Kumari takes a comprehensive approach to healthcare, ensuring personalized treatment for each patient. She firmly believes in the power of natural healing through homeopathy, which stimulates the body's own immune system to restore balance and promote self-healing.
        </p>

        <h2>Inspiring Cases & Success Stories</h2>
        <ul className={styles.successStories}>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Chronic Knee Pain Healed Naturally: A senior citizen recovered fully from severe knee pain without surgery.</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Restoring Mobility in a Child: A boy with swollen knees regained mobility after homeopathic treatment.</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Managing Stress & Infertility: A woman dealing with stress-related infertility conceived naturally with holistic care.</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Successfully Treated Psoriasis: A patient suffering from severe psoriasis found lasting relief through individualized homeopathic therapy.</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Overcoming Chronic Digestive Issues: A patient with persistent digestive problems found complete relief after treatment for gastritis and food intolerances.</li>
        </ul>

        <h2>Vision & Commitment to Healthcare</h2>
        <ul className={styles.visionList}>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Provide safe, side-effect-free treatments for all ages</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Promote better health without dependency on conventional drugs</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Spread awareness about the effectiveness of homeopathy</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Enhance patient care through research & modern approaches</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} /> Empower patients with knowledge and active participation in their healing journey</li>
        </ul>

        <p className={styles.cta}>🌿 Embrace the power of homeopathy and experience healing the natural way! 🌿</p>
      </div>
    </div>
  );
};

export default Doctors;
