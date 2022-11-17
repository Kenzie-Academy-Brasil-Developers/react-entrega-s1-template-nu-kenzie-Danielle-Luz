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
  const [filteredRegisters, setFilteredRegisters] = useState([...registers]);
  const [seletedCategory, setSelectedCategory] = useState("Todos");

  function setRegistersByFilter(event) {
    let button = event.target;
    let filteredCategory = button.innerText;

    if (filteredCategory != "Todos") {
      filteredCategory = filteredCategory.substring(
        0,
        filteredCategory.length - 1
      );

      const registersAfterFilter = registers.filter((register) => {
        return register.category == filteredCategory;
      });

      setFilteredRegisters([...registersAfterFilter]);
    } else {
      setFilteredRegisters([...registers]);
    }

    setSelectedCategory(button.innerText);
  }

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <section className="payment-info">
          <Form
            registers={registers}
            setRegisters={setRegisters}
            filteredRegisters={filteredRegisters}
            setFilteredRegisters={setFilteredRegisters}
          />
          <Total />
        </section>
        <section className="financial-resume-wrapper">
          <article className="financial-resume">
            <h3 className="financial-title">Resumo financeiro</h3>
            <div className="button-group">
              {categorys.map((category) => {
                return (
                  <ButtonSecondary
                    text={category}
                    onClick={setRegistersByFilter}
                    seletedCategory={seletedCategory}
                  />
                );
              })}
            </div>
          </article>
          {filteredRegisters.length == 0 && (
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
              filteredRegisters.map((register, index) => {
                return (
                  <Card
                    key={index}
                    borderClass={
                      register.category == "Entrada" ? "card-entry" : "card-out"
                    }
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
