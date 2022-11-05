const HOST = 'http://k7c108.p.ssafy.io:8000/';
const USER_HOST = 'http://k7c108.p.ssafy.io:8010/';
const SOCIAL_HOST = 'http://k7c108.p.ssafy.io:8020/';
const CHARACTER_HOST = 'http://k7c108.p.ssafy.io:8030/';

const USER = 'user-service/';
const USER_INFO = 'user/';

const GATEWAY = 'http://k7c108.p.ssafy.io:8000/';

const DIARY = 'social-service/';

const urls = {
  user: {
    login: () => HOST + USER + USER_INFO + 'login',
    getUserInfo: (userId: string) => USER_HOST + USER + USER_INFO + userId,
  },
  diary: {
    submit: () => GATEWAY + DIARY + 'diary',
  },
};

export default urls;
