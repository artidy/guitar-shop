import { Link } from 'react-router-dom';

import RatingStars from '../rating-stars/rating-stars';
import { AppRoute, IMAGE_FOLDER } from '../../conts';

type ProductCardProps = {
  id: number,
  imgSrc: string;
  rating: number;
  rateCount: number;
  title: string;
  price: number;
}

function ProductCard({id, imgSrc, rating, rateCount, title, price}: ProductCardProps): JSX.Element {
  return (
    <div className="product-card">
      <img src={`${IMAGE_FOLDER}/${imgSrc}`} width="75" height="190" alt={title} />
        <div className="product-card__info">
          <div className="rate product-card__rate">
            <RatingStars rating={rating} />
            <p className="visually-hidden">Рейтинг: Хорошо</p>
            <p className="rate__count">
              <span className="visually-hidden">Всего оценок:</span>
              {rateCount}
            </p>
          </div>
          <p className="product-card__title">{title}</p>
          <p className="product-card__price">
            <span className="visually-hidden">Цена:</span>
            {price} ₽
          </p>
        </div>
        <div className="product-card__buttons">
          <Link className="button button--mini" to={`${AppRoute.Products}/${id}`}>Подробнее</Link>
          <Link className="button button--red button--mini button--add-to-cart" to="#">Купить</Link>
        </div>
    </div>
  )
}

export default ProductCard;
