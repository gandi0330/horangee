import axios from 'axios';
import urls from './urls';

const api = {
  user: {
    login: async (formData: any) => {
      const response = await axios({
        url: urls.user.login(),
        method: 'post',
        data: {
          token: formData.data,
        },
      });
      return response;
    },
    getUserInfo: async (userId: string) => {
      const response = await axios({
        url: urls.user.getUserInfo(userId),
        method: 'get',
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
