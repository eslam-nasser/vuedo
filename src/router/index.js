import Vue from 'vue'
import Router from 'vue-router'
import Board from 'components/Board'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/myBoards',
      name: 'Board',
      component: Board
    }
  ]
})
