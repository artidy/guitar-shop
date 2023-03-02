import EditProductForm from '../components/edit-product-form/edit-product-form';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

import { getCurrentProduct, getIsLoading } from '../store/products-data/selectors';
import { useAppDispatch, useAppSelector } from '../hooks';
import { editProduct, fetchProduct } from '../store/products-data/api-actions';
import Spinner from '../components/spinner/spinner';
import NotFoundPage from './not-found-page';
import { setComments, setCurrentProduct } from '../store/products-data/products-data';
import { AppRoute } from '../conts';
import { Product } from '../types/product';

function EditProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector(getCurrentProduct);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchProduct(+id));

    return () => {
      dispatch(setCurrentProduct(null));
      dispatch(setComments([]));
    }
  }, [dispatch, id]);

  const handleSubmit = useCallback(async (productData: Product) => {
    await dispatch(editProduct(productData));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <section className="edit-item">
      <div className="container">
        <h1 className="edit-item__title">СURT Z30 Plus</h1>
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item"><a className="link" href={AppRoute.Main}>Каталог</a>
          </li>
          <li className="breadcrumbs__item"><a className="link" href={AppRoute.Products}>Товары</a>
          </li>
          <li className="breadcrumbs__item"><a className="link">{product.title}</a>
          </li>
        </ul>
        <EditProductForm
          product={product}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  )
}

export default EditProductPage;
