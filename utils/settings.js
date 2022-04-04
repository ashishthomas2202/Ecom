import variables from '../styles/variables.module.scss';
export const Brand = {
  name: 'Ecommerce',
  fullname: 'Ecommerce LLC',
};

export const Header = {
  menu: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/shop',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ],

  action: [
    {
      name: 'Favorite',
      link: '/favorite',
      faIcon: 'fa-heart',
      container: {
        shape: 'round',
        backgroundColor: variables.primaryColor,
        color: '#ffffff',
      },
    },
    {
      name: 'ShoppingBag',
      link: '/shoppingBag',
      faIcon: 'fa-bag-shopping',
      container: {
        shape: 'round',
        backgroundColor: variables.secondaryColor,
        color: '#ffffff',
      },
    },
  ],
};
