import "./styles.css";

import "./styles.css";
import { ButtonSecondary } from "./../Button";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="pink">Nu</span> Kenzie
        </h1>
        <ButtonSecondary text="Início" />
      </div>
    </header>
  );
}