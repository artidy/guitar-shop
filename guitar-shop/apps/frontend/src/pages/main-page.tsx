import { Link } from 'react-router-dom';

import { AppRoute } from '../conts';
import Filter from '../components/filter/filter';
import { getIsLoading, getProducts } from '../store/products-data/selectors';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/product-card/product-card';
import Pagination from '../components/pagination/pagination';
import Spinner from '../components/spinner/spinner';

function MainPage(): JSX.Element {
  const products = useAppSelector(getProducts);
  const isLoading = useAppSelector(getIsLoading);

  if (isLoading) {
    return <Spinner />
  }

  const productsBlock = products.map((product) =>
      <ProductCard
        key={product.id}
        id={product.id ?? 0}
        imgSrc={product.previewPath}
        rating={5}
        rateCount={10}
        title={product.title}
        price={product.price}
      />
  );

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
        <div className="cards catalog__cards">
          {productsBlock}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default MainPage;
