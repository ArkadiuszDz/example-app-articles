import axios from 'axios';

const fetchData = (url: string) => {
  return axios.get(url);
};

export default fetchData;