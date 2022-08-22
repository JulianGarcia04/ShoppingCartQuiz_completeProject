import axios from 'axios';

export const getOneData = async (id)=>{
  let response = await axios.get(`https://shoppingcartserver.azurewebsites.net/api/v1/product/${id}`);
  let data = await response.data;
  return data;
}
