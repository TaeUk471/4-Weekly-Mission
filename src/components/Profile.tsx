import { sharedUser } from '../interface/dataForm';
import styles from '../styles/components/Profile.module.css';

const Profile = ({ user }: { user: sharedUser }) => {
  return (
    <div className={styles.userBox}>
      <img className={styles.profileImage} src={user.profileImageSource} alt='UserProfile' />
      <p className={styles.profileEmail}>{user.email}</p>
    </div>
  );
};

export default Profile;
