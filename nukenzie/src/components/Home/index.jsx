import "./styles.css";

import Header from "../Header";
import Total from "../Total";
import Form from "../Form";
import { ButtonSecondary } from "../Button";
import { Card, EmptyCard } from "../Card";

import { useState } from "react";

export default function Home() {
  const types = ["Todos", "Entradas", "Despesas"];
  const [registers, setRegisters] = useState([]);
  const [filteredRegisters, setFilteredRegisters] = useState([...registers]);
  const [seletedtype, setSelectedtype] = useState("Todos");

  function setRegistersByFilter(event) {
    let button = event.target;
    let filteredtype = button.innerText;

    if (filteredtype != "Todos") {
      filteredtype = filteredtype.substring(0, filteredtype.length - 1);

      const registersAfterFilter = registers.filter((register) => {
        return register.type == filteredtype;
      });

      setFilteredRegisters([...registersAfterFilter]);
    } else {
      setFilteredRegisters([...registers]);
    }

    setSelectedtype(button.innerText);
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
            seletedtype={seletedtype}
          />
          <Total registers={registers} />
        </section>
        <section className="financial-resume-wrapper">
          <article className="financial-resume">
            <h3 className="financial-title">Resumo financeiro</h3>
            <div className="button-group">
              {types.map((type) => {
                return (
                  <ButtonSecondary
                    text={type}
                    onClick={setRegistersByFilter}
                    seletedtype={seletedtype}
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
              filteredRegisters.map((register) => {
                return (
                  <Card
                    cardId={register.id}
                    key={register.id}
                    borderClass={
                      register.type == "Entrada" ? "card-entry" : "card-out"
                    }
                    description={register.description}
                    type={register.type}
                    value={register.value}
                    registers={registers}
                    setRegisters={setRegisters}
                    filteredRegisters={filteredRegisters}
                    setFilteredRegisters={setFilteredRegisters}
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
