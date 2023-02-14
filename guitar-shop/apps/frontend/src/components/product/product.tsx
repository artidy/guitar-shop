import { Link } from 'react-router-dom';
import { useRef, MouseEvent } from 'react';

import RatingStars from '../rating-stars/rating-stars';
import { IMAGE_FOLDER } from '../../conts';

type ProductProps = {
  imgSrc: string;
  rating: number;
  rateCount: number;
  title: string;
  price: number;
  article: string;
  type: string;
  stringsCount: number;
  description: string;
}

function Product(
  {
    imgSrc,
    rating,
    rateCount,
    title,
    price,
    article,
    type,
    stringsCount,
    description
  }: ProductProps): JSX.Element {
  const characteristics = useRef(null as HTMLTableElement | null);
  const descriptions = useRef(null as HTMLParagraphElement | null);
  const characteristicsButton = useRef(null as HTMLAnchorElement | null);
  const descriptionsButton = useRef(null as HTMLAnchorElement | null);

  const onClickHandler = (name: string = '') => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    if (!characteristics.current || !descriptions.current) return;

    characteristics.current.classList.add('hidden');
    descriptions.current.classList.add('hidden');
    characteristicsButton.current?.classList.remove('button--black-border');
    descriptionsButton.current?.classList.remove('button--black-border');

    if (name === 'characteristics') {
      characteristics.current.classList.remove('hidden');
      descriptionsButton.current?.classList.add('button--black-border');

      return;
    }

    descriptions.current.classList.remove('hidden');
    characteristicsButton.current?.classList.add('button--black-border');
  }

  return (
    <div className="product-container">
      <img className="product-container__img" src={`${IMAGE_FOLDER}/${imgSrc}`} width="90" height="235" alt="" />
      <div className="product-container__info-wrapper">
        <h2 className="product-container__title title title--big title--uppercase">{title}</h2>
        <div className="rate product-container__rating">
          <RatingStars rating={rating} />
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{rateCount}</p>
        </div>
        <div className="tabs">
          <a
            ref={characteristicsButton}
            className="button button--medium tabs__button"
            onClick={onClickHandler('characteristics')}
          >Характеристики</a>
          <a
            ref={descriptionsButton}
            className="button button--black-border button--medium tabs__button"
            onClick={onClickHandler()}
          >Описание</a>
          <div className="tabs__content">
            <table ref={characteristics} className="tabs__table">
              <tbody>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Артикул:</td>
                  <td className="tabs__value">{article}</td>
                </tr>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Тип:</td>
                  <td className="tabs__value">{type}</td>
                </tr>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Количество струн:</td>
                  <td className="tabs__value">{stringsCount} струнная</td>
                </tr>
              </tbody>
            </table>
            <p ref={descriptions} className="tabs__product-description hidden">{description}</p>
          </div>
        </div>
      </div>
      <div className="product-container__price-wrapper">
        <p className="product-container__price-info product-container__price-info--title">Цена:</p>
        <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
        <Link className="button button--red button--big product-container__button" to="#">Добавить в корзину</Link>
      </div>
    </div>
  )
}

export default Product;
