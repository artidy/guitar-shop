import { FormEvent, useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { login } from '../../store/user-data/api-actions';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form method="post" action="#" onSubmit={handleSubmit}>
      <div className="input-login">
        <label htmlFor="email">Введите e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          required
        />
        <p className="input-login__error">Заполните поле</p>
      </div>
      <div className="input-login">
        <label htmlFor="passwordLogin">Введите пароль</label>
        <span>
          <input
            type="password"
            placeholder="• • • • • • • • • • • •"
            id="passwordLogin"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
          <button className="input-login__button-eye" type="button">
            <svg width="14" height="8" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </button>
        </span>
        <p className="input-login__error">Заполните поле</p>
      </div>
      <button className="button login__button button--medium" type="submit">Войти</button>
    </form>
  )
}

export default LoginForm;
