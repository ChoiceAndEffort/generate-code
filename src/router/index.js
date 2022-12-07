/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-01 09:33:30
 * @LastEditors: gonglei
 * @LastEditTime: 2022-12-07 12:41:06
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import HbUI from '../views/hb-ui/index.vue';
import Print from '../views/print/index.vue';
import Print1 from '../views/print/index1.vue';
import Print2 from '../views/print/index2.vue';
import Config from '../views/config/index.vue';
import BiDesign from '../views/bi-design/index.vue';
// import Print from '../views/print/index原始改造的.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home'
    // component: HomeView
  },
  {
    path: '/gantt',
    name: 'gantt'
    // component: GanttView
  },
  {
    path: '/lg-gantt',
    name: 'LgGantt'
    // component: LgGantt
  },
  {
    path: '/big-screen',
    name: 'bigScreen'
    // component: bigScreen
  },
  {
    path: '/hb-ui',
    name: 'HbUI',
    component: HbUI
  },
  {
    path: '/print',
    name: 'Print',
    component: Print
  },
  {
    path: '/print1',
    name: 'Print1',
    component: Print1
  },
  {
    path: '/print2',
    name: 'Print2',
    component: Print2
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  },
  {
    path: '/bi-design',
    name: 'BiDesign',
    component: BiDesign
    // component: () => {
    //   import(/* webpackChunkName: "about" */ '../views/bi-design/index.vue');
    // }
  }
  // {
  //   path: '/print3',
  //   name: 'Print3',
  //   component: Print
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
