import axios from 'axios';
import urls from './urls';

const api = {
  auth: {
    login: async (formData: any) => {
      const response = await axios({
        url: urls.auth.login(),
        method: 'post',
        data: {
          token: formData.data,
        },
      });
      return response;
    },
  },
  diary: {
    submitMain: async (diary: any) => {
      console.log(diary);
      const res = await axios({
        url: urls.diary.submit(),
        method: 'post',
        data: {
          ...diary,
        },
      });
      console.log(res);
      return res;
    },
  },
};

export default api;
