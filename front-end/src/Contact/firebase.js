import axios from 'axios';

export default axios.create({
  baseURL:'https://restaurant-7375d-default-rtdb.firebaseio.com/'
})