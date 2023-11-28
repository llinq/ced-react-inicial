import axios from 'axios';

export const getUserInAPI = () => {
   return axios.get('https://jsonplaceholder.typicode.com/todos/1')
              .then((res) => res.data);
};
