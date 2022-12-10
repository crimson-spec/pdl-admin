export const menus = [
  {
    title: 'Home',
    routePath: '/',
  },
  {
    title: 'Cadastros',
    submenu: [
      {
        title: 'Usuários',
        routePath: '/list/users',
      },
      {
        title: 'Produtos',
        routePath: '/list/products',
      },
    ],
  },
  {
    title: 'Relatórios',
    submenu: [
      {
        title: 'Pedidos',
        routePath: '/reports/orders',
      },
    ],
  },
];
