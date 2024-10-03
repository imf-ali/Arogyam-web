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
        <div>
          <h3>{treatment.name}</h3>
          <p>{treatment.description}</p>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default TreatmentItem;