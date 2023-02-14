type PriceFilterProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
}

function PriceFilter({id, label, name, placeholder}: PriceFilterProps): JSX.Element {
  return (
    <div className="form-input">
      <label className="visually-hidden">{ label }</label>
      <input type="number" placeholder={placeholder} id={id} name={name} />
    </div>
  )
}

export default PriceFilter;
