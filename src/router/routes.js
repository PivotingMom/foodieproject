const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth.vue') },
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuthentication: true },
    children: [
      { path: '', name: 'dashboard', component: () => import('src/pages/Dashboard.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/ProfilePage.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
