import { ChangeEventHandler } from 'react';

type RadioBtnProps = {
  id: string;
  name: string;
  value: string | number;
  title: string;
  onChange: ChangeEventHandler;
  checked: boolean;
}

function RadioBtn({id, name, value, title, onChange, checked}: RadioBtnProps): JSX.Element {
  return (
    <>
      <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={checked} />
      <label htmlFor={id}>{title}</label>
    </>
  )
}

export default RadioBtn;
