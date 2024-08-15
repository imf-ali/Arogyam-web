import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import styles from '../../styles/AdminPage/ManageTestimonial.module.css';
import testingPic from '../../assets/testingPic.png';

const ManageTestimonial = () => {
  const { testimonials } = useSelector(webState);
  return (
    <div className={styles.parentDiv}>
      <h2>Manage Testimonials</h2>
      <table border="1" className={styles.tableDiv}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Show on Home</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{testimonial.name}</td>
              <td><div className={styles.imageDiv}><img src={testingPic} /></div></td>
              <td>{testimonial.desc}</td>
              <td>{testimonial.isTestimonial? 'Yes' : 'No'}</td>
              <td>
                <select>
                  <option>Show to home</option>
                  <option>Remove from home</option>
                  <option>Delete testimonial</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManageTestimonial;