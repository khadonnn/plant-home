import Account from '../pages/Account';
import Category from '../pages/Category';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Promotion from '../pages/Promotion';
import Chat from '../pages/Chat';
//public routes
const publicRoutes = [];
//private routes
const privateRoutes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/product', component: Product },
  { path: '/promotion', component: Promotion },
  { path: '/category', component: Category },
  { path: '/account', component: Account },
  { path: '/chat', component: Chat },
];
export { privateRoutes, publicRoutes };
