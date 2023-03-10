import { Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../conts';
import LayoutPage from '../../pages/layout-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import LoginPage from '../../pages/login-page';
import RegisterPage from '../../pages/register-page';
import ProductPage from '../../pages/product-page';
import PrivateRoute from '../private-route/private-route';
import ProductsListPage from '../../pages/products-list-page';
import EditProductPage from '../../pages/edit-product-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        <Route path={`${AppRoute.Products}/:id`} element={<ProductPage />} />
        <Route
          path={AppRoute.Products}
          element={
            <PrivateRoute>
              <ProductsListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.EditProduct}/:id`}
          element={
            <PrivateRoute>
              <EditProductPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
