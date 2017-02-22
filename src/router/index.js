import Vue from 'vue'
import Router from 'vue-router'
import Board from 'components/Board'
import Login from 'components/Login'
import Register from 'components/Register'
import About from 'components/About'
import VeeValidate from 'vee-validate';

Vue.use(Router)

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Board',
      component: Board
    }
  ]
})
