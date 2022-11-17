import "./styles.css";

export function InputText({ placeholder, label, info }) {
  return (
    <article>
      <label className="label">{label}</label>
      <input
        className="input input-text"
        type="text"
        placeholder={placeholder}
      />
      <p className="label grey-3 ">{info}</p>
    </article>
  );
}

export function InputValue({ onChange, label }) {
  return (
    <article>
      <label className="label">{label}</label>
      <div className="input-wrapper">
        <input
          className="input input-text"
          type="number"
          placeholder="1"
          onChange={onChange}
        />
        <span className="price-sign">R$</span>
      </div>
    </article>
  );
}
