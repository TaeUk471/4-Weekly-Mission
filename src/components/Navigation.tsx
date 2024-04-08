import logo from '../assets/logo/logo.png';
import { sharedUser } from '../interface/dataForm';
import styles from '../styles/components/navigation.module.css';

import Login from './Button/login';
import Profile from './profile';

const Navigation = ({ user }: { user: sharedUser }) => {
  return (
    <>
      <nav className={styles.container}>
        <div>
          <img className={styles.logo} src={logo.src as string} alt='Linkbrary Logo' />
        </div>
        {/* <p>shared</p>
        <p>folder</p> */}
        {user.email && user.profileImageSource ? <Profile user={user} /> : <Login />}
      </nav>
    </>
  );
};

export default Navigation;
