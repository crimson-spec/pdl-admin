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
        title: 'Setores',
        routePath: '/list/sectors',
      },
      {
        title: 'Categorias',
        routePath: '/list/categories',
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
