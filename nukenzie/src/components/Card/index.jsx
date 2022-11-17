import "./styles.css";
import { ButtonIcon } from "../Button";

export default function Card({ title, category, price }) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <div>
          <span>{price}</span>
          <ButtonIcon />
        </div>
      </div>
      <span>
        {category}
      </span>
    </article>
  );
}
