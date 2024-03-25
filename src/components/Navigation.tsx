import styles from '../styles/components/navigation.module.css';
import logo from '../assets/logo/logo.png';
import { sharedUser } from '../interface/dataForm';
import Profile from './Profile';
import Login from './Button/Login';

const Navigation = ({ user }: { user: sharedUser }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src={logo.src as string} alt='Linkbrary Logo' />
        </div>
        {/* <p>shared</p>
        <p>folder</p> */}
        {user.email && user.profileImageSource ? <Profile user={user} /> : <Login />}
      </div>
    </>
  );
};

export default Navigation;
