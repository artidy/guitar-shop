import { Link } from 'react-router-dom';

import { AppRoute } from '../conts';
import Filter from '../components/filter/filter';
import { getProducts } from '../store/products-data/selectors';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/product-card/product-card';
import Pagination from '../components/pagination/pagination';
import ProductCardButtons from '../components/product-card-buttons/product-card-buttons';

function MainPage(): JSX.Element {
  const products = useAppSelector(getProducts);

  const productsBlock = products.map((product) =>
      <ProductCard
        key={product.id}
        imgSrc={product.previewPath}
        rating={5}
        rateCount={10}
        title={product.title}
        price={product.price}
      >
        <ProductCardButtons id={product.id ?? 0} />
      </ProductCard>
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
