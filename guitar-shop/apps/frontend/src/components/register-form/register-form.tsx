import { FormEvent, useState } from 'react';

import { registerUser } from '../../store/user-data/api-actions';
import { useAppDispatch } from '../../hooks';

function RegisterForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <form method="post" action="#" onSubmit={handleSubmit}>
      <div className="input-login">
        <label htmlFor="name">Введите имя</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          required
        />
        <p className="input-login__error">Заполните поле</p>
      </div>
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
        <label htmlFor="password">Придумайте пароль</label>
        <span>
          <input
            type="password"
            placeholder="• • • • • • • • • • • •"
            id="password"
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
      <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default RegisterForm;
