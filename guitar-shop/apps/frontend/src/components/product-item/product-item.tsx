import { Link } from 'react-router-dom';

import { AppRoute, IMAGE_FOLDER } from '../../conts';
import RatingStars from '../rating-stars/rating-stars';
import { getDatePreview } from '../../services/helpers';

type ProductItemProps = {
  id: number;
  imgSrc: string;
  rating: number;
  title: string;
  price: number;
  createdDate: Date;
}

enum RatingStarSizes {
  Width = '14',
  Height = '14'
}

function ProductItem({id, imgSrc, rating, title, price, createdDate}: ProductItemProps): JSX.Element {
  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img src={`${IMAGE_FOLDER}/${imgSrc}`} width="36" height="93" alt={title} />
        <div className="catalog-item__data-wrapper">
          <p className="catalog-item__data-title">{title}</p>
          <div className="rate catalog-item__data-rate">
            <RatingStars
              rating={rating}
              width={RatingStarSizes.Width}
              height={RatingStarSizes.Height}
            />
            <p className="visually-hidden">Оценка: Хорошо</p>
          </div>
          <p className="catalog-item__data-date">Дата добавления {getDatePreview(createdDate)}</p>
          <p className="catalog-item__data-price">{price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link
          className="button button--small button--black-border"
          to={`${AppRoute.EditProduct}/${id}`}
          aria-label="Редактировать товар"
        >
          Редактировать
        </Link>
        <button
          className="button button--small button--black-border"
          type="submit"
          aria-label="Удалить товар"
        >
          Удалить
        </button>
      </div>
    </li>
  )
}

export default ProductItem;
