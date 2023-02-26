import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { AppRoute } from '../conts';
import Product from '../components/product/product';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchProduct } from '../store/products-data/api-actions';
import NotFoundPage from './not-found-page';
import { getComments, getCurrentProduct, getIsLoading } from '../store/products-data/selectors';
import Comment from '../components/comment/comment';
import Spinner from '../components/spinner/spinner';

function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector(getCurrentProduct);
  const comments = useAppSelector(getComments);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchProduct(+id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />
  }

  if (!product) {
    return <NotFoundPage />;
  }

  const commentsBlock = comments.map((comment) =>
    <Comment
      user={comment.user}
      advantages={comment.advantages}
      disadvantages={comment.disadvantages}
      text={comment.text}
      rating={comment.rating}
      createdAt={comment.createdAt}
    />);

  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">Товар</h1>
      <ul className="breadcrumbs page-content__breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRoute.Main}>Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRoute.Main}>Каталог</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="link">Товар</a>
        </li>
      </ul>
      <Product
        imgSrc={product.previewPath}
        rating={4}
        rateCount={15}
        title={product.title}
        price={product.price}
        article={product.article}
        type={product.type}
        stringsCount={product.stringCount}
        description={product.description}
      />
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <Link className="button button--red-border button--big reviews__sumbit-button" to="#">Оставить отзыв</Link>
        {commentsBlock}
        <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
        <Link className="button button--up button--red-border button--big reviews__up-button" to="#header">Наверх</Link>
      </section>
    </div>
  )
}

export default ProductPage;
