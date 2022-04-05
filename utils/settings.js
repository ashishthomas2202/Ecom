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

  user: [
    {
      name: 'Sign In',
      link: '/auth/signin',
      container: {
        shape: 'pill',
        backgroundColor: variables.secondaryColor,
        color: '#ffffff',
      },
    },
  ],
};

export const Pages = {
  landing: {
    link: '/',
  },
};

export const Footer = {
  toolbar: [
    {
      name: 'Home',
      link: '/',
      faIcon: 'fa-house',
    },
    {
      name: 'Shop',
      link: '/shop',
      faIcon: 'fa-buffer',
      faType: 'fab',
    },
    {
      name: 'Shopping Bag',
      link: '/shoppingBag',
      faIcon: 'fa-bag-shopping',
    },
    {
      name: 'Favorite',
      link: '/favorite',
      faIcon: 'fa-heart',
    },
    {
      name: 'Account',
      link: '/',
      faIcon: 'fa-user',
    },
  ],
  main: {
    brand: {
      name: Brand.fullname,
      link: Pages.landing.link,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    shop: [
      {
        name: 'Men',
        link: '/',
      },
      {
        name: 'Women',
        link: '/',
      },
      {
        name: 'Kids',
        link: '/',
      },
      {
        name: 'Baby',
        link: '/',
      },
      {
        name: 'Accessories',
        link: '/',
      },
    ],

    help: [
      {
        name: 'Contact Us',
        link: '/contact',
      },
      {
        name: 'FAQs',
        link: '/',
      },
      {
        name: 'Shipping Services',
        link: '/',
      },
      {
        name: 'Returns & Exchanges',
        link: '/',
      },
      {
        name: 'Payment Options',
        link: '/',
      },
      {
        name: 'Product Care',
        link: '/',
      },
    ],

    social: [
      {
        name: 'Facebook',
        link: '/',
        faIcon: 'fa-facebook-f',
        faType: 'fab',
      },
      {
        name: 'Instagram',
        link: '/',
        faIcon: 'fa-instagram',
        faType: 'fab',
      },
      {
        name: 'Pinterest',
        link: '/',
        faIcon: 'fa-pinterest-p',
        faType: 'fab',
      },
      {
        name: 'Twitter',
        link: '/',
        faIcon: 'fa-twitter',
        faType: 'fab',
      },
      {
        name: 'Youtube',
        link: '/',
        faIcon: 'fa-youtube',
        faType: 'fab',
      },
    ],
  },
};
