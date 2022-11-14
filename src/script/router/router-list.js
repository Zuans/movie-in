import Router from './router'

const router = new Router('first-router', [
  {
    path: '/',
    template: 'home',
  },
  {
    path: '/detail/:id',
    template: 'detail',
  },
])
export default router