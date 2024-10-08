import { Link } from 'react-router-dom';
import treatmentsData from '../assets/treatments.json';
import styles from '../styles/TreatmentsPage/Treatment.module.css';

const Treatment = () => {
	return (
		<div className={styles.treatmentDiv}>
			<h3>Homeopathy Treatment</h3>
			<p>Homeopathy is known for its safe and gentle ways of treatment. People across the world prefer homeopathy over conventional medicine, as it has no side-effects, and is non-toxic and non-addictive. Homeopathic medicine acts by stimulating your body’s natural healing power through your immune system and nerves. It is known to cure various types of chronic and acute ailments. It is suitable for all age groups, from infants to the elderly. All homeopathic medicines are safe, provided they are taken under supervision of our homeopathic doctor. Furthermore, homeopathic remedies are not known to interfere with conventional medicine or any other medicine. In fact, they play a complementary role. You can safely take homeopathic medicine along with your medicine for blood pressure, thyroid, heart problems, diabetes, etc.</p>
			<p>The efficacy of homeopathic medicines has been proven through several double-blind clinical trials in treating several diseases.</p>
			<p>There are over 600 published research studies, 180 controlled and 120 randomised trials that demonstrate the effectiveness of homeopathy. Some of the study results proving the efficiency of homeopathic medicines on major ailments have been discussed below:</p>
			<ol className={styles.orderedItem}>
				{treatmentsData.treatments.map((item) => (
					<li key={item.id}>
						<Link to={`/treatments/${item.path}`}>{item.name}</Link>
					</li>
				))}
			</ol>
		</div>
	);
}

export default Treatment;