import { Link } from 'react-router-dom';

import { AppRoute } from '../conts';
import Filter from '../components/filter/filter';
import Pagination from '../components/pagination/pagination';
import { useAppSelector } from '../hooks';
import { getProducts } from '../store/products-data/selectors';
import ProductCard from '../components/product-card/product-card';
import ProductListButtons from '../components/product-list-buttons/product-list-buttons';

function ProductsListPage(): JSX.Element {
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
        <ProductListButtons id={product.id ?? 0} />
      </ProductCard>
  );

  return (
    <section className="product-list">
      <div className="container">
        <h1 className="product-list__title">Список товаров</h1>
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="link" to={AppRoute.Main}>Каталог</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Товары</a>
          </li>
        </ul>
        <div className="catalog">
          <Filter />
          <div className="cards catalog__cards">
            {productsBlock}
          </div>
          <button className="button product-list__button button--red button--big">Добавить новый товар</button>
          <Pagination />
        </div>
      </div>
    </section>
  )
}

export default ProductsListPage;
