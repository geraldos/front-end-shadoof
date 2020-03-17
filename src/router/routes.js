
const routes = [
  {
    path: '/',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/Register.vue') }
    ]
  },
  {
    path: '/locationdeviceactive',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/LokasiAlatAktif.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/About.vue') }
    ]
  },
  {
    path: '/registerdevice',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/regisAlat/Index.vue')
      }
    ]
  },
  // auth route (user biasa)

  {
    path: '/user',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'User',
        path: '',
        component: () => import('pages/listUser/User.vue')
      }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/info/:guid',
    component: () => import('layouts/LayoutDetail.vue'),
    children: [
      {
        name: 'Info',
        path: '',
        component: () => import('pages/listUser/InfoDevice.vue')
      }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/Peta',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'Peta',
        path: '',
        component: () => import('pages/lihatLahan/Peta.vue')
      }
    ],
    meta: {
      requiredAuth: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
