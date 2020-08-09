import {
  faColumns,
  faCommentDollar,
  faChild,
  faBox,
  faBarcode
} from '@fortawesome/free-solid-svg-icons';

export const pages = [
  {
    id: 1,
    name: 'Dashboard',
    icon: faColumns,
    route: '/dashboard'
  },
  {
    id: 2,
    name: 'Sales',
    icon: faCommentDollar,
    route: '/sales'
  },
  {
    id: 3,
    name: 'Clients',
    icon: faChild,
    route: '/clients'
  },
  {
    id: 4,
    name: 'Providers',
    icon: faBox,
    route: '/providers'
  },
  {
    id: 5,
    name: 'Products',
    icon: faBarcode,
    route: '/products'
  }
];
