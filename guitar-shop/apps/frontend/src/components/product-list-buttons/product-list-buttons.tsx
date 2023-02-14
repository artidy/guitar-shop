import { Link } from 'react-router-dom';

import { AppRoute } from '../../conts';

type ProductListButtonsProps = {
  id: number;
}

function ProductListButtons({id}: ProductListButtonsProps): JSX.Element {
  return (
    <div className="catalog-item__buttons">
      <Link
        className="button button--small button--black-border"
        to={`${AppRoute.Products}/${id}${AppRoute.Edit}`}
        aria-label="Редактировать товар"
      >
        Редактировать
      </Link>
      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">
        Удалить
      </button>
    </div>
  )
}

export default ProductListButtons;
