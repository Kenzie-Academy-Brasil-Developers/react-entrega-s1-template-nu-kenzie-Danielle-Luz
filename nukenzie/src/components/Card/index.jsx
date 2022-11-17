import "./styles.css";
import { ButtonIcon } from "../Button";

export function Card({ title, category, price }) {
  return (
    <article className="card">
      <div className="card-header">
        <h2 className="title">{title}</h2>
        <div className="details">
          <span className="price">{price}</span>
          <ButtonIcon />
        </div>
      </div>
      <span className="category">{category}</span>
    </article>
  );
}

export function EmptyCard () {
  return (
    <article className="card card-out">
      <div className="empty-text"></div>
      <div className="empty-text"></div>
    </article>
  );
}