import { Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../conts';
import MainPage from '../../pages/main-page';
import LayoutPage from '../../pages/layout-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<LayoutPage />}>
        <Route path={AppRoute.Main} element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
