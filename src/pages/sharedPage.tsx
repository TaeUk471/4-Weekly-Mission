import { useEffect, useState } from 'react';
import { sharedData } from '../Utils/Api/axiosSet';
import Navigation from '../components/Navigation';
import { sharedUser } from '../interface/dataForm';
import { SHARED__USER } from '../Utils/Constants/InitialValue';

const SharedPage = () => {
  const [user, setUser] = useState<sharedUser>(SHARED__USER);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sharedData.profile();
        setUser(result); // 확인용 로그
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigation user={user} />
    </div>
  );
};

export default SharedPage;
