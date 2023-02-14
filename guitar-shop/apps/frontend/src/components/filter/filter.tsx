import CheckboxFilter from '../checkbox-filter/checkbox-filter';
import PriceFilter from '../price-filter/price-filter';

const PRICE_FILTERS = [
  {
    id: 'priceMin',
    label: 'Минимальная цена',
    name: 'от',
    placeholder: '1 000'
  },
  {
    id: 'priceMax',
    label: 'Максимальная цена',
    name: 'до',
    placeholder: '30 000'
  }
]

const GUITAR_TYPE_FILTERS = [
  {
    id: 'electric',
    type: 'electric',
    label: 'Электрогитары'
  },
  {
    id: 'ukulele',
    type: 'ukulele',
    label: 'Укулеле'
  },
  {
    id: 'acoustic',
    type: 'acoustic',
    label: 'Акустические гитары'
  }
]

const GUITAR_STRINGS = [6, 12, 18, 24];

function Filter(): JSX.Element {
  const priceFilterBlock = PRICE_FILTERS.map(({id, label, name, placeholder}) =>
    <PriceFilter key={id} id={id} label={label} name={name} placeholder={placeholder} />);

  const guitarTypeFilterBlock = GUITAR_TYPE_FILTERS.map(({id, label}) =>
    <CheckboxFilter key={id} id={id} name={id} label={label} checked={false} />);

  const guitarStringsFilterBlock = GUITAR_STRINGS.map((value) => {
    const id = `${value}-strings`;

    return <CheckboxFilter key={id} id={id} name={id} label={value.toString()} checked={false} />
  });

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          {priceFilterBlock}
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        {guitarTypeFilterBlock}
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        {guitarStringsFilterBlock}
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">
        Очистить
      </button>
    </form>
  )
}

export default Filter;
