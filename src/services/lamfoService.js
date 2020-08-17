import api from '@config/api';

export const getTop10 = () =>
  api.get('/top10').then((response)=>{
    if(response.ok) {
      return response.data;
    }
    return;
  });

export const getUltimaFecha = (id) =>
  api.get('/ultima/'+ id ).then((response)=>{
    if(response.ok) {
      return response.data;
    }
    return;
  });

  export const getPosiciones = (id) =>
  api.get('/posiciones/'+ id ).then((response)=>{
    if(response.ok) {
      return response.data;
    }
    return;
  });