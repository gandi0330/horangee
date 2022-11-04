const HOST = 'https://k7c108.p.ssafy.io:8081/';
const GATEWAY = 'http://k7c108.p.ssafy.io:8000/';
const AUTH = 'auth/';
const DIARY = 'social-service/';

const urls = {
  auth: {
    login: () => HOST + AUTH + 'login',
  },
  diary: {
    submit: () => GATEWAY + DIARY + 'diary',
  },
};

export default urls;
