type CheckboxFilterProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
}

function CheckboxFilter({id, name, label, checked}: CheckboxFilterProps): JSX.Element {
  return (
    <div className="form-checkbox catalog-filter__block-item">
      <input className="visually-hidden" type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{ label }</label>
    </div>
  )
}

export default CheckboxFilter;
