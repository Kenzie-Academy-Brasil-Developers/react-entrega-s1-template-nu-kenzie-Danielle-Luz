import "./styles.css";

export function InputText ({placeholder}) {
  return (
    <input className="input input-text" type="text" placeholder={placeholder} />
  );
}

export function InputValue ({onChange}) {
  return (
    <div className="input-wrapper">
      <input className="input input-text" type="number" placeholder="1" onChange={onChange} />
      <span className="price-sign">R$</span>
    </div>
  );
}