import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, Reducer, useReducer } from 'react';

import { AppRoute, GUITAR_STRINGS, GUITAR_TYPES, IMAGE_FOLDER } from '../../conts';
import RadioBtn from '../radio-btn/radio-btn';
import { getDatePreview } from '../../services/helpers';
import { EditProductAction, EditProductActionType } from '../../types/edit-product-form';
import { Product } from '../../types/product';
import { editProductFormReducer } from './edit-product-form.reducer';

type ProductCardProps = {
  product: Product;
  onSubmit: (productData: Product) => void;
}

const createData = new Date();

function EditProductForm({product, onSubmit}: ProductCardProps): JSX.Element {
  const [productData, dispatchProductData] = useReducer<Reducer<Product, EditProductAction>>(
    editProductFormReducer,
    product
  );

  const {
    id,
    title,
    previewPath,
    description,
    article,
    stringCount,
    type,
    price,
  } = productData;

  const typesContent = GUITAR_TYPES.map(({id, value, title}) =>
    <RadioBtn
      key={id}
      id={id}
      name={'item-type'}
      value={value}
      title={title}
      onChange={onChangeInput(EditProductActionType.setType)}
      checked={value === type}
    />
  );

  const stringsContent = GUITAR_STRINGS.map((value) => (
    <RadioBtn
      key={`string-qty-${value}`}
      id={`string-qty-${value}`}
      name={'string-qty'}
      value={value}
      title={value.toString()}
      onChange={onChangeInput(EditProductActionType.setStrings)}
      checked={value === stringCount}
    />
  ));

  function onChangeInput(actionType: EditProductActionType) {
    return (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!evt?.target?.value) {
        return;
      }

      dispatchProductData({type: actionType, payload: evt.target.value})
    }
  }

  function onSubmitForm(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    onSubmit(productData);
  }

  return (
    <form className="edit-item__form" action="#" method="post" onSubmit={onSubmitForm}>
      <div className="edit-item__form-left">
        <div className="edit-item-image edit-item__form-image">
          <div className="edit-item-image__image-wrap">
            <img
              className="edit-item-image__image"
              src={`${IMAGE_FOLDER}/${previewPath}`}
              height="332"
              alt={title}
            />
          </div>
          <div className="edit-item-image__btn-wrap">
            <button className="button button--small button--black-border edit-item-image__btn">Заменить</button>
            <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
          </div>
        </div>
        <div className="input-radio edit-item__form-radio">
          <span>Тип товара</span>
          {typesContent}
        </div>
        <div className="input-radio edit-item__form-radio">
          <span>Количество струн</span>
          {stringsContent}
        </div>
      </div>
      <div className="edit-item__form-right">
        <div className="custom-input edit-item__form-input">
          <label>
            <span>Дата добавления товара</span>
            <input
              type="text"
              name="date"
              value={getDatePreview(createData)}
              placeholder="Дата в формате 00.00.0000"
              readOnly
            />
          </label>
        </div>
        <div className="custom-input edit-item__form-input">
          <label>
            <span>Наименование товара</span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Наименование"
              onChange={onChangeInput(EditProductActionType.setTitle)}
            />
          </label>
          <p>Заполните поле</p>
        </div>
        <div className="custom-input edit-item__form-input edit-item__form-input--price">
          <label>
            <span>Цена товара</span>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Цена в формате 00 000"
              onChange={onChangeInput(EditProductActionType.setPrice)}
            />
          </label>
          <p>Заполните поле</p>
        </div>
        <div className="custom-input edit-item__form-input">
          <label><span>Артикул товара</span>
            <input
              type="text"
              name="sku"
              value={article}
              placeholder="Артикул товара"
              onChange={onChangeInput(EditProductActionType.setArticle)}
            />
          </label>
          <p>Заполните поле</p>
        </div>
        <div className="custom-textarea edit-item__form-textarea">
          <label><span>Описание товара</span>
            <textarea
              name="description"
              placeholder=""
              value={description}
              onChange={onChangeInput(EditProductActionType.setDescription)}
            />
          </label>
          <p>Заполните поле</p>
        </div>
      </div>
      <div className="edit-item__form-buttons-wrap">
        <button className="button button--small edit-item__form-button" type="submit">Сохранить изменения</button>
        <Link
          to={AppRoute.Products}
          className="button button--small edit-item__form-button"
          type="button"
        >
          Вернуться к списку товаров
        </Link>
      </div>
    </form>
  )
}

export default EditProductForm;
