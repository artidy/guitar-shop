import { Link, Navigate } from 'react-router-dom';

import { AppRoute } from '../conts';
import LoginForm from '../components/login-form/login-form';
import { useAppSelector } from '../hooks';
import { getIsAuth } from '../store/user-data/selectors';

function LoginPage(): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);

  if (isAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">Войти</h1>
        <p className="login__text">Hовый пользователь?
          <Link className="login__link" to={AppRoute.Register}>
            Зарегистрируйтесь
          </Link> прямо сейчас
        </p>
        <LoginForm />
      </section>
    </div>
  )
}

export default LoginPage;
