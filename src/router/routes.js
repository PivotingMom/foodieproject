const routes = [
  {
    path: '/',
    name: 'explore',
    component: () => import('pages/ExplorePage.vue'),
  },
  {
    path: '/view-menu/:id',
    name: 'view-menu',
    props: true,
    component: () => import('pages/ViewMenu.vue'),
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'auth', component: () => import('pages/Auth.vue') },
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuthentication: true },
    children: [
      { path: '', name: 'dashboard', component: () => import('src/pages/Dashboard.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'menu', name: 'menu', component: () => import('pages/MenuPage.vue') },
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
