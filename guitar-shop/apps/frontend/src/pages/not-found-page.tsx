import { Link } from 'react-router-dom';

import { AppRoute } from '../conts';

function NotFoundPage(): JSX.Element {
  return (
    <div className="container">
      <section className="error">
        <h1 className="error__title">404</h1>
        <span className="error__subtitle">Страница не найдена.</span>
        <p className="error__text"> Возможно, страница была удалена или <br /> её вовсе не существовало.</p>
        <Link to={AppRoute.Main} className="button button__error button--small button--black-border">
          Продолжить покупки
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage;
