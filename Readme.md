# Личный проект «Guitar Shop»

* Разработчик: [Андрей Печенников](https://htmlacademy.ru/profile/devandy).
* Время выполнения: 64 ч. 30 мин.

---

_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`._

---

### Запуск проекта:

_В корневой папке проекта запустите команду:_
```
npm i
```
_В папке с проектом `users` запустите команду:_
```
docker-compose up -d
```
_В папке с проектом `products` запустите команды:_
```
docker-compose up -d
```
```
nx db-migrate
```
```
nx db-generate
```
```
nx db-fill
```
_В корневой папке проекта запустите команды:_
```
nx run users:serve
```
```
nx run products:serve
```
```
nx run bff:serve
```
```
nx run frontend:serve
```
_Заходим на [сайт](http://localhost:4200/register) и регистрируем пользователя._
