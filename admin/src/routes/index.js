import Account from '../pages/account';
import Category from '../pages/category';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Product from '../pages/product';
import Promotion from '../pages/promotion';
import Chat from '../pages/chat';

import HousePlant from '../pages/product/houseplant';
import OfficePlant from '../pages/product/officeplant';
import StorePlant from '../pages/product/storeplant';
import HouseDetail from '../pages/product/houseplant/HouseDetail';
import OfficeDetail from '../pages/product/officeplant/OfficeDetail';
import StoreDetail from '../pages/product/storeplant/StoreDetail';

//public routes
const publicRoutes = [];
//private routes
const privateRoutes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    child: [
      {
        path: '/houseplant',
        component: HousePlant,
        name: 'HousePlant',
        child: [{ path: '/:houseId', component: HouseDetail }],
      },
      {
        path: '/officeplant',
        component: OfficePlant,
        name: 'OfficePlant',
        child: [{ path: '/:officeId', component: OfficeDetail }],
      },
      {
        path: '/plant',
        component: StorePlant,
        name: 'StorePlant',
        child: [{ path: '/:storeId', component: StoreDetail }],
      },
    ],
  },
  { path: '/promotion', component: Promotion, name: 'Promotion' },
  { path: '/category', component: Category, name: 'Category' },
  { path: '/account', component: Account, name: 'Account' },
  { path: '/chat', component: Chat, name: 'Chat' },
];
export { privateRoutes, publicRoutes };
