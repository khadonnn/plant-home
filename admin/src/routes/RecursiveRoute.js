import { Route } from 'react-router-dom';

const RecursiveRoute = ({ routes }) => {
  console.log('reout', routes);
  const Page = routes.component;
  // return routes.map((route) => (
  //   <Route key={route.path} path={route.path} element={<Page />}>
  //     {route.children && RecursiveRoute(route.children)}
  //   </Route>
  // ));

  return <Route path="/" element={<p>hello worl</p>} />;
};

export default RecursiveRoute;
