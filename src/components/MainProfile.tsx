import { sharedCard } from '../interface/dataForm';
import styles from '../styles/components/MainProfile.module.css';

const mainProfile = ({ folder }: { folder: sharedCard }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userBox}>
        <img className={styles.profileImage} src={folder.folder.owner.profileImageSource} alt='UserProfile' />
        <p className={styles.profileName}>{folder.folder.owner.name}</p>
      </div>
      <div>
        <p className={styles.folderName}>{folder.folder.name}</p>
      </div>
    </div>
  );
};

export default mainProfile;
