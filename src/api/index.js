// import { HttpRequest } from 'hb-services';
// const http = new HttpRequest({});
// console.log('http', http);
import { HttpRequest } from 'hb-services';
const API = {
  production: {
    production: 'https://erp-api.gggjpg.com:9999',
    test: 'https://192.168.20.152:9099',
    release: 'https://test-erp.gggjpg.com:2222'
  },
  development: 'http://192.168.20.151:9099'
};
const TIME_OUT = 30 * 1000;
const NODE_ENV = process.env.NODE_ENV;
const APP_TITLE = process.env.VUE_APP_TITLE;
console.log(NODE_ENV, APP_TITLE);
const options = {
  baseURL:
    Object.prototype.toString.call(API[NODE_ENV]) === '[object Object]'
      ? API[NODE_ENV]?.[APP_TITLE]
      : API[NODE_ENV],
  withCredentials: true,
  timeout: TIME_OUT,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

const { instance } = new HttpRequest(options);
// console.log('http', instance, 9999);
export default instance;
