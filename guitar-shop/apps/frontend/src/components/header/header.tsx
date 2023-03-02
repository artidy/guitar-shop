import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { AppRoute } from '../../conts';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { getIsAdmin, getUser } from '../../store/user-data/selectors';

function Header(): JSX.Element {
  const location = useLocation();
  const [currentLink, setCurrentLink] = useState(location.pathname);
  const user = useAppSelector(getUser);
  const isAdmin = useAppSelector(getIsAdmin);

  const onClickHandler = (link: AppRoute) => {
    return () => setCurrentLink(link);
  }

  return (
    <header className={`header${user ? ' header--logged' : ''}`} id="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link
                  className={`link main-nav__link${currentLink === AppRoute.Main ? ' link--current' : ''}`}
                  to={AppRoute.Main}
                  onClick={onClickHandler(AppRoute.Main)}
                >
                  Каталог
                </Link>
              </li>
              { isAdmin &&
                <li className="main-nav__item">
                  <Link
                    className={`link main-nav__link${currentLink === AppRoute.Orders ? ' link--current' : ''}`}
                    to={AppRoute.Orders}
                    onClick={onClickHandler(AppRoute.Orders)}
                  >
                    Список заказов
                  </Link>
                </li>
              }
              { isAdmin &&
                <li className="main-nav__item">
                  <Link
                    className={`link main-nav__link${currentLink === AppRoute.Products ? ' link--current' : ''}`}
                    to={AppRoute.Products}
                    onClick={onClickHandler(AppRoute.Products)}
                  >
                    Список товаров
                  </Link>
                </li>
              }
            </ul>
          </nav>
          <div className="header__container">
            <span className="header__user-name">{user?.name}</span>
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
