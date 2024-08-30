import { Fragment } from 'react';
import { Route } from 'react-router-dom';

const recursiveRoute = (routes, parentPath = '') => {
  return routes.map(({ path, component: Page, child }) => {
    const fullPath = parentPath + path;
    if (child) {
      return (
        <Fragment key={fullPath}>
          <Route key={fullPath} path={fullPath} element={<Page />} />
          {recursiveRoute(child, fullPath)}
        </Fragment>
      );
    }
    return <Route key={fullPath} path={fullPath} element={<Page />} />;
  });
};

export default recursiveRoute;
