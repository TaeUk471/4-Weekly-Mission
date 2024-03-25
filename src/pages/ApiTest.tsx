import { useEffect } from 'react';
import { folderData, sharedData } from '../Utils/Api/axiosSet';

const ApiTest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await folderData.profile();
        console.log(result); // 확인용 로그
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default ApiTest;
