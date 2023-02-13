import { Link } from 'react-router-dom';

import { AppRoute } from '../../conts';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="link main-nav__link link--current" to={AppRoute.Main}>
                  Каталог
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link main-nav__link" to={AppRoute.Cart}>
                  Где купить?
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link main-nav__link" to={AppRoute.Main}>
                  О компании
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__container">
            <span className="header__user-name">Имя</span>
            <Link className="header__link" to={AppRoute.Login} aria-label="Перейти в личный кабинет">
              <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                <use xlinkHref="#icon-account"></use>
              </svg>
              <span className="header__link-text">Вход</span>
            </Link>
            <Link className="header__cart-link" to={AppRoute.Cart} aria-label="Перейти в корзину">
              <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-basket"></use>
              </svg>
              <span className="header__cart-count">2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
