import Axios from 'axios';
import { ENDPOINT } from '../constants/Api';

export default Axios.create({
  baseURL: ENDPOINT,
});