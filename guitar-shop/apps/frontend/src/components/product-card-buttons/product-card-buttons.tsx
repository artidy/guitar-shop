import { Link } from 'react-router-dom';

import { AppRoute } from '../../conts';

type ProductCardButtonsProps = {
  id: number;
}

function ProductCardButtons({id}: ProductCardButtonsProps): JSX.Element {
  return (
    <div className="product-card__buttons">
      <Link className="button button--mini" to={`${AppRoute.Products}/${id}`}>Подробнее</Link>
      <Link className="button button--red button--mini button--add-to-cart" to="#">Купить</Link>
    </div>
  );
}

export default ProductCardButtons;
