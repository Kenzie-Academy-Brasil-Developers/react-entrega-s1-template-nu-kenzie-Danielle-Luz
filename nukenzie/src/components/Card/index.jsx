import "./styles.css";
import { ButtonIcon } from "../Button";

export function Card({ description, type, value, borderClass }) {
  return (
    <article className={`card ${borderClass}`}>
      <div className="card-header">
        <h2 className="description">{description}</h2>
        <div className="details">
          <span className="value">
            {parseFloat(value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <ButtonIcon onClick={(event) => {
            const card = event.target.closest(".card");

            card.remove();
          }} />
        </div>
      </div>
      <span className="type">{type}</span>
    </article>
  );
}

export function EmptyCard() {
  return (
    <article className="card card-out">
      <div className="empty-text"></div>
      <div className="empty-text"></div>
    </article>
  );
}
