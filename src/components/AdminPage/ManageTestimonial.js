import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import styles from '../../styles/AdminPage/ManageTestimonial.module.css';

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
            <th>Is Testimonial</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{testimonial.name}</td>
              <td><div className={styles.imageDiv}><img src={testimonial.imageUrl} /></div></td>
              <td>{testimonial.desc}</td>
              <td>{testimonial.isTestimonial? 'Yes' : 'No'}</td>
              <td>Options</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManageTestimonial;