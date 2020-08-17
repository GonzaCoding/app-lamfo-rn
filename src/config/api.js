import {create} from 'apisauce';
//import Config from 'react-native-config';

const api = create({
  baseURL: "https://app-lamfo-api.vercel.app/",
  timeout: 5000,
});

export default api;