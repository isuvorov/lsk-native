// import config from 'lego-starter-kit/utils/config';
// export default config.init({
//
//
// const url = __DEV__ ? 'http://x.mgbeta.ru:8080' : 'https://lsk.mgbeta.ru';
const url = 'https://lsk.mgbeta.ru';
global.__url = url;
export default {
  url: 'https://lsk.mgbeta.ru',
  api: {
    url,
    // url: 'https://lsk.mgbeta.ru',
    // base: '/api/v1',
    base: '/api/v1',
  },
  log: {
    level: 'trace',
    // level: __DEV__ ? 'trace' : 'error',
  },
};
