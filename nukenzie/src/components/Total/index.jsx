import "./styles.css";

export default function Total({ registers }) {
  const total = registers.reduce(
    (total, register) => (total += parseFloat(register.value)),
    0
  );
  return (
    <article className="total-card">
      <div className="total-header">
        <h2 className="total-title">Valor total:</h2>
        <span className="total-value">$ {total.toFixed(2)}</span>
      </div>
      <p className="info">O valor se refere ao saldo</p>
    </article>
  );
}
