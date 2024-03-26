import { sharedCard, sharedUser } from '../interface/dataForm';
import styles from '../styles/components/Header.module.css';
import MainProfile from './mainProfile';

const Header = ({ folder }: { folder: sharedCard }) => {
  return (
    <main className={styles.container}>
      <MainProfile folder={folder} />
    </main>
  );
};

export default Header;
