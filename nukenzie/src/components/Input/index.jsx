import "./styles.css";

export function InputText({ placeholder, label, info, name }) {
  return (
    <article>
      <label className="label">{label}</label>
      <input
        name={name}
        className="input input-text"
        type="text"
        placeholder={placeholder}
      />
      <p className="label grey-3 ">{info}</p>
    </article>
  );
}

export function InputValue({ label, name }) {
  return (
    <article>
      <label className="label">{label}</label>
      <div className="input-wrapper">
        <input
          name={name}
          className="input input-text"
          type="number"
          placeholder="1"
        />
        <span className="price-sign">R$</span>
      </div>
    </article>
  );
}
