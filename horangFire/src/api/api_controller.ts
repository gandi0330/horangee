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
};

export default api;
