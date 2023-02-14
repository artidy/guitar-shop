import { Link } from 'react-router-dom';

type ProductCardProps = {
  imgSrc: string;
  rating: number;
  rateCount: number;
  title: string;
  price: number;
}

enum RatingStar {
  EmptyStar = '#icon-star',
  FullStar = '#icon-full-star'
}

const RATINGS = [1, 2, 3, 4, 5];
const IMAGE_FOLDER = process.env.NX_IMAGE_URL;

function ProductCard({imgSrc, rating, rateCount, title, price}: ProductCardProps): JSX.Element {
  const ratingBlock = RATINGS.map((value) => {
    const starIcon = value > rating ? RatingStar.EmptyStar : RatingStar.FullStar;

    return (<svg key={value} width="12" height="11" aria-hidden="true">
              <use xlinkHref={starIcon}></use>
            </svg>)
  });

  return (
    <div className="product-card">
      <img src={`${IMAGE_FOLDER}/${imgSrc}`} width="75" height="190" alt={title} />
        <div className="product-card__info">
          <div className="rate product-card__rate">
            {ratingBlock}
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
          <Link className="button button--mini" to="#">Подробнее</Link>
          <Link className="button button--red button--mini button--add-to-cart" to="#">Купить</Link>
        </div>
    </div>
  )
}

export default ProductCard;
