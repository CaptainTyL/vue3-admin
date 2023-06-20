export const basicRouters = [
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页'
    }
  },
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/pages/dashboard/index.vue'),
    meta: {
      title: 'Dashboard'
    }
  }
]
