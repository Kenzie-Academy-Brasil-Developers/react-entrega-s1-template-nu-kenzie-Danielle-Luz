import "./styles.css";

import Header from "../Header";
import Total from "../Total";
import Form from "../Form";
import { ButtonSecondary } from "../Button";
import { Card, EmptyCard } from "../Card";
import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState([]);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <section className="payment-info">
          <Form />
          <Total />
        </section>
        <section></section>
      </main>
    </div>
  );
}
