import "./styles.css";

import Banner from "../Banner";
import { ButtonPrimary } from "../Button";

export default function Login({ setLogged }) {
  return (
    <div className="wrapper">
      <main className="main">
        <h1 className="logo">
          <span className="pink">Nu</span> Kenzie
        </h1>
        <h2 className="title-1">Centralize o controle das suas finanças</h2>
        <p className="text-1">de forma rápida e segura</p>
        <ButtonPrimary
          text="Iniciar"
          onClick={() => {
            setLogged(true);
          }}
        />
      </main>
      <Banner />
    </div>
  );
}
