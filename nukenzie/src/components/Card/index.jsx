import "./styles.css";
import { ButtonIcon } from "../Button";

export default function Card({ title, category, price }) {
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
