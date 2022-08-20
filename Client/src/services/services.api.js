import axios from 'axios';

export const getData = async ()=>{
  let response = await axios.get('http://localhost:3000/api/v1/product');
  let data = await response.data;
  return data;
}



