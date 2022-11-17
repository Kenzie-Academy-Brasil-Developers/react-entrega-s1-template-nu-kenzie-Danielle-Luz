import "./styles.css";

import "./styles.css";
import { ButtonSecondary } from "./../Button";

export default function Header({ setLogged }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="pink">Nu</span> Kenzie
        </h1>
        <ButtonSecondary
          text="Início"
          onClick={() => {
            setLogged(false);
          }}
        />
      </div>
    </header>
  );
}
