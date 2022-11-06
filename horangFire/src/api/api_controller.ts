import axios from 'axios';
import urls from './urls';

const api = {
  auth: {
    login: async (socialId: string) => {
      const response = await axios({
        url: urls.auth.login(),
        method: 'post',
        data: {
          id: socialId,
          role: 'User',
        },
      });

      return response;
    },
  },

  user: {
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

  character: {
    getNowUserCharacter: async (userId: string) => {
      const response = await axios({
        url: urls.character.getNowUserCharacter(userId),
        method: 'get',
      });
      return response;
    },
  },
};

export default api;
