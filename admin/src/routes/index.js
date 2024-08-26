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
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  {
    path: '/product',
    component: Product,
    children: [
      {
        path: '/houseplant',
        component: HousePlant,
        children: [{ path: '/:id', component: HouseDetail }],
      },
      {
        path: '/officeplant',
        component: OfficePlant,
        children: [{ path: '/:id', component: OfficeDetail }],
      },
      {
        path: '/plant',
        component: StorePlant,
        children: [{ path: '/:id', component: StoreDetail }],
      },
    ],
  },
  { path: '/promotion', component: Promotion },
  { path: '/category', component: Category },
  { path: '/account', component: Account },
  { path: '/chat', component: Chat },
];
export { privateRoutes, publicRoutes };
