import { useParams } from 'react-router-dom';
import treatmentData from '../../assets/treatments.json';
import styles from '../../styles/TreatmentsPage/Treatment.module.css';
import NotFound from '../NotFound';

const TreatmentItem = () => {
  const { name } = useParams();
  const treatment = treatmentData.treatments.find((item) => item.path === name);
  return (
    <div className={styles.treatmentItem}>
      {treatment ? (
        <>
         {Object.keys(treatment.data).map(key => (
           <div key={key}>
            <h2>{key}</h2>
            {Array.isArray(treatment.data[key]) ? (
              <ul>
                {treatment.data[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              ) : typeof treatment.data[key] === 'object' ? (
                <div>
                  {Object.keys(treatment.data[key]).map(subKey => (
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
  )
}

export default TreatmentItem;