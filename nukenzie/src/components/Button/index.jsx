import "./styles.css";
import whiteTrash from "../../assets/imgs/trash-white.svg";
import blackTrash from "../../assets/imgs/black-trash.png";
import { useState } from "react";

export function ButtonPrimary ({text}) {
  return (
    <button className="button button-primary">{text}</button>
  );
}

export function ButtonSecondary ({text, onClick}) {
  return (
    <button className="button button-secondary" onClick={onClick}>{text}</button>
  );
}

export function ButtonIcon () {
  const [img, setImg] = useState(blackTrash);

  return (
    <button className="button button-icon" onMouseOver={
      () => {
        setImg(whiteTrash);
      }
    }
    onMouseLeave={
      () => {
        setImg(blackTrash);
      }
    }>
      <img src={img} alt="ícone de lixeira" />
    </button>
  );
}

