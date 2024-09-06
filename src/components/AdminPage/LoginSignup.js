import { useState } from "react";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import styles from '../../styles/AdminPage/Login.module.css';
import { login, signUp } from "../../store/api";
import MessageCard from "../../utils/MessageCard";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../store/AdminDataStore/AdminDataContext";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    let res;
    if (!showLogin) {  
      if(password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      res = await signUp(name, email, phone, password, adminKey);
      if(res.status === 400 || res.status === 500 || res.status === 409){
        setErrorMessage(res.data.message);
        return;
      }
      if(res.status === 201) {
        dispatch(loginAdmin(res.data))
      }
    } else {
      res = await login(email, password);
      if(res.status === 400 || res.status === 500 || res.status === 409 || res.status === 401){
        setErrorMessage(res.data.message);
        return;
      }
      if(res.status === 200) {
        dispatch(loginAdmin(res.data))
      }
    }
  }
  return (
    <div className={styles.parentDiv}>
      {errorMessage.length !== 0 && <MessageCard message={errorMessage} isError={true} />}
      <div className={styles.heading}>{showLogin ? 'Login' : 'Signup'}</div>
      {!showLogin && (
        <InputField
          labelName='Name'
          inputType='text'
          placeholderText='Enter your name'
          value={name}
          setText={setName}
        />
      )}
      <InputField
        labelName='Email'
        inputType='email'
        placeholderText='Enter your email'
        value={email}
        setText={setEmail}
      />
      {!showLogin && (
        <InputField
          labelName='Phone'
          inputType='number'
          placeholderText='Enter your number'
          value={phone}
          setText={setPhone}
        />
      )}
      <InputField
        labelName='Password'
        inputType='password'
        placeholderText='Enter your password'
        value={password}
        setText={setPassword}
      />
      {!showLogin && (
        <InputField
          labelName='Confirm password'
          inputType='password'
          placeholderText='Enter your password again'
          value={confirmPassword}
          setText={setConfirmPassword}
        />
      )}
      {!showLogin && (
        <InputField
          labelName='Admin Key'
          inputType='number'
          placeholderText='Enter the admin key'
          value={adminKey}
          setText={setAdminKey}
        />
      )}
      <Button text={`${showLogin ? 'Login' : 'Signup'}`} width='20%' handleClick={handleClick} />
      <div
        className={styles.textContent}
        onClick={() => setShowLogin(state => !state)}
      >
        {showLogin ? 'Create an account. Sign up here.' : 'Already having an account? Login.'}
      </div>
    </div>
  )
}

export default LoginSignup;