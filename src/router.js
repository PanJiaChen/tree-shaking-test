import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    // {
    //   path: '/about2',
    //   name: 'about2',
    //   component: () => import('./views/About2.vue'),
    // },
  ],
});
