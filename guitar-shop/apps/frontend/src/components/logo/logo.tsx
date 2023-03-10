import { Link } from 'react-router-dom';

import { AppRoute } from '../../conts';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo logo" to={AppRoute.Main}>
      <img className="logo__img" width="70" height="70" src="assets/img/svg/logo.svg" alt="Логотип" />
    </Link>
  )
}

export default Logo;
