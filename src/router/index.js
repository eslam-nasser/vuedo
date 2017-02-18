import Vue from 'vue'
import Router from 'vue-router'
import Board from 'components/Board'
import Login from 'components/Login'
import Register from 'components/Register'
import VeeValidate from 'vee-validate';

Vue.use(Router)
// Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Board',
      component: Board
    }
  ]
})
