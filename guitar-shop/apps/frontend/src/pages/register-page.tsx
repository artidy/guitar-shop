import { Navigate } from 'react-router-dom';

import RegisterForm from '../components/register-form/register-form';
import { useAppSelector } from '../hooks';
import { getIsAuth } from '../store/user-data/selectors';
import { AppRoute } from '../conts';

function RegisterPage(): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);

  if (isAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">Регистрация</h1>
        <RegisterForm />
      </section>
    </div>
  )
}

export default RegisterPage;
