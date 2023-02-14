import { Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../conts';
import LayoutPage from '../../pages/layout-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import LoginPage from '../../pages/login-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
