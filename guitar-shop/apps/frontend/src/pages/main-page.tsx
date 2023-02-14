import { Link } from 'react-router-dom';
import { AppRoute } from '../conts';
import Filter from '../components/filter/filter';

function MainPage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
      <ul className="breadcrumbs page-content__breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRoute.Main}>Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="link">Каталог</a>
        </li>
      </ul>
      <div className="catalog">
        <Filter />
      </div>
    </div>
  );
}

export default MainPage;
