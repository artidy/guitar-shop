import { Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../conts';
import LayoutPage from '../../pages/layout-page';
import MainPage from '../../pages/main-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<LayoutPage />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
