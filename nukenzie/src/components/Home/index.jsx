import "./styles.css";

import Header from "../Header";
import Total from "../Total";
import Form from "../Form";
import { ButtonSecondary } from "../Button";
import { Card, EmptyCard } from "../Card";

import { useState } from "react";

export default function Home() {
  const categorys = ["Todos", "Entradas", "Despesas"];
  const [registers, setRegisters] = useState([
    {
      title: "Trabalhar",
      category: "Entrada",
      price: 50.9,
    },
    {
      title: "Estudar",
      category: "Despesa",
      price: 50.9,
    },
  ]);
  const [filteredRegisters, setFilteredRegisters] = useState([]);

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
              registers.map((register, index) => {
                return (
                  <Card
                    key={index}
                    borderClass={
                      register.category == "Entrada" ? "card-entry" : "card-out"
                    }
                    title={register.title}
                    category={register.category}
                    price={register.price}
                    onLoad={(event) => {
                      const category = event.target;

                      if (category.innerText == "Todos") {
                        category.click();
                      }
                    }}
                    onClick={(event) => {
                      const filteredCategory = event.target.innerText;

                      if (filteredCategory != "Todos") {
                        const registersAfterFilter = registers.filter(
                          (register) => {
                            return register.category == filteredCategory;
                          }
                        );

                        setFilteredRegisters([registersAfterFilter]);
                      } else {
                        setFilteredRegisters(registers);
                      }
                    }}
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
