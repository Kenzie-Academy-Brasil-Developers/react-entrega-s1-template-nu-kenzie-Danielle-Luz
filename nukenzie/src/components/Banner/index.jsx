import "./styles.css";
import circleBig from "./../../assets/imgs/circle-1.svg";
import circleMedium from "./../../assets/imgs/circle-2.svg";
import circleSmall from "./../../assets/imgs/circle-3.svg";
import cardGreen from "./../../assets/imgs/card-green.svg";
import cardPink from "./../../assets/imgs/card-pink.svg";
import bigCard from "./../../assets/imgs/big-card.svg";

export default function Banner () {
  return (
    <div className="banner position-relative">
      <div className="circles position-absolute">
        <img className="position-absolute" src={circleSmall} alt="círculo pequeno" />
        <img className="position-absolute" src={circleMedium} alt="círculo médio" />
        <img className="position-absolute" src={circleBig} alt="círculo maior" />
      </div>
      <div>
        <div className="small-cards position-absolute">
          <img src={cardGreen} alt="" />
          <img src={cardPink} alt="" />
        </div>
        <img className="big-card position-relative" src={bigCard} alt="retângulo branco" />
      </div>
    </div>
  );
}