import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import treatmentData from '../../assets/treatments.json';
import styles from '../../styles/TreatmentsPage/Treatment.module.css';
import NotFound from '../NotFound';
import watermark from '../../assets/logoLight.png';

const TreatmentItem = () => {
  const { name } = useParams();
  const treatment = treatmentData.treatments.find((item) => item.path === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.watermarkContainer} style={{ '--watermark': `url(${watermark})` }}>
      <div className={styles.treatmentItem}>
        {treatment ? (
          <>
            {Object.keys(treatment.data).map((key) => (
              <div key={key} className={key === 'Severity Levels' ? styles.severityBox : key === 'Foods That May Exacerbate' ? styles.foodsBox : key === 'Benefits of Using Homeopathy' ? styles.benefits : ''}>
                <h2>{key}</h2>
                {Array.isArray(treatment.data[key]) ? (
                  <ul>
                    {treatment.data[key].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : typeof treatment.data[key] === 'object' ? (
                  <div>
                    {Object.keys(treatment.data[key]).map((subKey) => (
                      <div key={subKey}>
                        <strong>{subKey}: </strong> {treatment.data[key][subKey]}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{treatment.data[key]}</p>
                )}
              </div>
            ))}
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default TreatmentItem;