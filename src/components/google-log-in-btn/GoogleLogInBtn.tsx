import { GoogleLogin } from '@react-oauth/google';
import styles from './GoogleLogInBtn.module.scss';

const GoogleLogInBtn = () => {
  return (
    <div className={styles.googleLogIn}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log('token:', credentialResponse.credential);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default GoogleLogInBtn;