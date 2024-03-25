import axios, { AxiosResponse } from 'axios';
import { BASE_URL, SHARED_USER, SHARED_CARD, FOLDER_CATEGORY, FOLDER_CARD, FOLDER_USER } from '../Constants/Url';
import { folderCard, folderCategory, folderUser, sharedCard, sharedUser } from '@/src/interface/dataForm';

axios.defaults.baseURL = BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(endpoint: string) => axios.get<T>(endpoint).then(responseBody),
  post: <T>(endpoint: string, body: {}) => axios.post<T>(endpoint, body).then(responseBody),
  delete: <T>(endpoint: string) => axios.delete<T>(endpoint).then(responseBody),
};

//Shared 페이지의 데이터
export const sharedData = {
  profile: () => request.get<sharedUser>(SHARED_USER),
  card: () => request.get<sharedCard>(SHARED_CARD),
};

//Folder 페이지의 데이터
export const folderData = {
  category: () => request.get<folderCategory>(FOLDER_CATEGORY),
  card: () => request.get<folderCard>(FOLDER_CARD),
  profile: () => request.get<folderUser>(FOLDER_USER),
};
