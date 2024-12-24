import {AuthProvider} from "ra-core";
import axios from "axios";
import {UserIdentity} from 'react-admin'
const authProvider:AuthProvider = {
  login: async ({ username, password }) => {
    const response = await axios.post('/api/login',{username, password})
      if(response.status === 200 ){
          localStorage.setItem('auth','true')

          Promise.resolve('succes')
      }



           Promise.reject(new Error('Not correct'));
  },
  checkError: (error) => Promise.resolve(),
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(new Error('Not correct'));

  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => Promise.resolve({id:1}),
  getPermissions: () => Promise.resolve(),
};
export default authProvider