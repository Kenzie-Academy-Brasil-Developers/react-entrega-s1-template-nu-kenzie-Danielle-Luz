import "./styles.css";

import Header from "../Header";
import Total from "../Total";
import Form from "../Form";
import { ButtonSecondary } from "../Button";
import { Card, EmptyCard } from "../Card";

import { useState } from "react";

export default function Home() {
  const categorys = ["Todos", "Entradas", "Despesas"];
  const [registers, setRegisters] = useState([]);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <section className="payment-info">
          <Form />
          <Total />
        </section>
        <section className="financial-resume-wrapper">
          <article className="financial-resume">
            <h3 className="financial-title">Resumo financeiro</h3>
            <div className="button-group">
              {categorys.map((category) => {
                return <ButtonSecondary text={category} />;
              })}
            </div>
          </article>
          {registers.length == 0 && (
            <h2 className="empty-message">
              Você ainda não possui nenhum lançamento
            </h2>
          )}
          <section className="cards-container">
            {registers.length == 0 ? (
              <>
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />
              </>
            ) : (
              registers.map((register) => {
                return (
                  <Card
                    title={register.title}
                    category={register.category}
                    price={register.price}
                  />
                );
              })
            )}
          </section>
        </section>
      </main>
    </div>
  );
}
