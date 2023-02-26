import RatingStars from '../rating-stars/rating-stars';
import { IMAGE_FOLDER } from '../../conts';

type ProductCardProps = {
  imgSrc: string;
  rating: number;
  rateCount: number;
  title: string;
  price: number;
  children: JSX.Element;
}

enum RatingStarSizes {
  Width = '12',
  Height = '11'
}

function ProductCard({imgSrc, rating, rateCount, title, price, children}: ProductCardProps): JSX.Element {
  return (
    <div className="product-card">
      <img src={`${IMAGE_FOLDER}/${imgSrc}`} width="75" height="190" alt={title} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <RatingStars
            rating={rating}
            width={RatingStarSizes.Width}
            height={RatingStarSizes.Height}
          />
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
      {children}
    </div>
  )
}

export default ProductCard;
