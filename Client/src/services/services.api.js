import axios from 'axios';

export const getData = async ()=>{
  let response = await axios.get('https://shoppingcartserver.azurewebsites.net/api/v1/product');
  let data = await response.data;
  return data;
}



