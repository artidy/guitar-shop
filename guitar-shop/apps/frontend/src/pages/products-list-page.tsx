import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

import { AppRoute } from '../conts';
import Filter from '../components/filter/filter';
import Pagination from '../components/pagination/pagination';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getProducts } from '../store/products-data/selectors';
import ProductItem from '../components/product-item/product-item';
import Sorting from '../components/sorting/sorting';
import { deleteProductApi } from '../store/products-data/api-actions';

function ProductsListPage(): JSX.Element {
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  function onDeleteHandle(id: number) {
    return (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();

      dispatch(deleteProductApi(id));
    }
  }

  const productsBlock = products.map((product) =>
      <ProductItem
        key={product.id}
        id={product.id ?? 0}
        imgSrc={product.previewPath}
        rating={5}
        createdDate={product.createdAt ?? new Date}
        title={product.title}
        price={product.price}
        onDeleteHandle={onDeleteHandle(product.id ?? 0)}
      />
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
          <Sorting />
          <div className="catalog-cards">
            <ul className="catalog-cards__list">
              {productsBlock}
            </ul>
          </div>
        </div>
        <button className="button product-list__button button--red button--big">Добавить новый товар</button>
        <Pagination />
      </div>
    </section>
  )
}

export default ProductsListPage;
