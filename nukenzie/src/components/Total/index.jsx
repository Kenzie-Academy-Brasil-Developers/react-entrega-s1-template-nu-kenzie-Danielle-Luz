import "./styles.css";

export default function Total ({total}) {
  return (
    <article className="total-card">
      <div className="total-header">
        <h2 className="total-title">Valor total:</h2>
        <span className="total-value">$ {total}</span>
      </div>
      <p className="info">O valor se refere ao saldo</p>
    </article>
  );
}