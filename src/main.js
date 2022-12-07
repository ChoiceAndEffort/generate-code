/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-06 14:38:45
 * @LastEditors: gonglei
 * @LastEditTime: 2022-11-30 09:23:29
 * @Description: this is description
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HbUI from '@hb/hb-ui';
Vue.config.productionTip = false;
console.log(HbUI);
import Print from 'vue-print-nb';
Vue.use(Print);
Vue.use(HbUI);
new Vue({
  router,
  store,

  render: (h) => h(App)
}).$mount('#app');
