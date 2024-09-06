import { useDispatch, useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import styles from '../../styles/AdminPage/ManageTestimonial.module.css';
import testingPic from '../../assets/testingPic.png';
import { useState } from "react";
import Button from "../../utils/Button";
import { deleteFeedbackData, updateFeedbackData } from "../../store/AdminDataStore/AdminDataApi";

const ManageTestimonial = () => {
  const { feedbacks } = useSelector(webState);
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState('0');
  const [confirmText, setConfirmText] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setConfirmText(event.target.value.split(',')[0] === '1' ? 'show to home' : event.target.value.split(',')[0] === '2' ? 'remove from home' : 'delete');
  };

  const handleCancel = () => {
    setSelectedValue('0');
    setConfirmText('');
  };

  const handleConfirm = () => {
    const [ option, feedbackId ] = selectedValue.split(',');
    switch (option) {
      case '1':
        dispatch(updateFeedbackData({ feedbackId, isTestimonial: true }));
        break;
      case '2':
        dispatch(updateFeedbackData({ feedbackId, isTestimonial: false }));
        break;
      case '3':
        dispatch(deleteFeedbackData({ feedbackId }));
        break;
      default:
        break;
    }
    setSelectedValue('0');
    setConfirmText('');
  };

  return (
    <>
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
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{feedback.name}</td>
                <td><div className={styles.imageDiv}><img src={testingPic} alt="user-image" /></div></td>
                <td>{feedback.desc}</td>
                <td>{feedback.isTestimonial ? 'Yes' : 'No'}</td>
                <td>
                  <select value={selectedValue} onChange={handleChange}>
                    <option value='0'>Choose an option</option>
                    <option value={`1,${feedback._id}`}>Show to home</option>
                    <option value={`2,${feedback._id}`}>Remove from home</option>
                    <option value={`3,${feedback._id}`}>Delete testimonial</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedValue !== '0' && (
        <>
          <div className={styles.backDrop} />
          <div className={styles.modalDiv}>
            <div className={styles.textDiv}>Confirm {confirmText}</div>
            <div className={styles.btnDiv}>
              <Button 
                text="Confirm" 
                width="20%" 
                backgroundColor="#3c6b3d" 
                handleClick={handleConfirm}
              />
              <Button 
                text="Cancel" 
                width="20%" 
                backgroundColor="#be4141" 
                handleClick={handleCancel}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ManageTestimonial;