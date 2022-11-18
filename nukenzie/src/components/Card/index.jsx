import "./styles.css";
import { ButtonIcon } from "../Button";

export function Card({
  cardId,
  description,
  type,
  value,
  borderClass,
  registers,
  setRegisters,
  filteredRegisters,
  setFilteredRegisters,
}) {
  return (
    <article className={`card ${borderClass}`} data-id={cardId}>
      <div className="card-header">
        <h2 className="description">{description}</h2>
        <div className="details">
          <span className="value">
            {parseFloat(value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <ButtonIcon
            onClick={(event) => {
              const removedCard = event.target.closest(".card");
              const removedCardId = removedCard.getAttribute("data-id");

              const newRegistersList = registers.filter(
                (register) => register.id != removedCardId
              );

              const newFilteredRegistersList = filteredRegisters.filter(
                (register) => register.id != removedCardId
              );

              setRegisters([...newRegistersList]);

              setFilteredRegisters([...newFilteredRegistersList]);
            }}
          />
        </div>
      </div>
      <span className="type">{type}</span>
    </article>
  );
}

export function EmptyCard() {
  return (
    <article className="card card-out">
      <div className="empty-text"></div>
      <div className="empty-text"></div>
    </article>
  );
}
