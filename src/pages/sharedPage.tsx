import { useEffect, useState } from 'react';
import { sharedData } from '../Utils/Api/axiosSet';
import Navigation from '../components/navigation';
import Header from '../components/header';
import { sharedCard, sharedUser } from '../interface/dataForm';
import { SHARED__CARD, SHARED__USER } from '../Utils/Constants/InitialValue';
import Footer from '../components/footer';

interface Props {
  getState: () => Promise<any>;
  setState: (result: any) => void;
}

const SharedPage = () => {
  const [user, setUser] = useState<sharedUser>(SHARED__USER);
  const [folder, setFolder] = useState<sharedCard>(SHARED__CARD);

  const fetchData = async ({ getState, setState }: Props) => {
    try {
      const result = await getState();
      setState(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData({ getState: sharedData.profile, setState: setUser });
    fetchData({ getState: sharedData.card, setState: setFolder });
  }, []);

  return (
    <>
      <Navigation user={user} />
      <Header folder={folder} />
      <Footer />
    </>
  );
};

export default SharedPage;
