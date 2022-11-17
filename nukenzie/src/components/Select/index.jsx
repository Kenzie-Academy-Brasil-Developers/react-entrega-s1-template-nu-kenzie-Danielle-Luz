import { useState } from "react";
import "./styles.css";

export function Select({ options, label }) {
  const [visibility, setVisibility] = useState(true);
  const [selected, setSelected] = useState(options[0]);

  return (
    <article>
      <label className="label">{label}</label>
      <div
        className="select-wrapper"
        onMouseLeave={() => {
          setVisibility(true);
        }}
      >
        <div
          className="select"
          onClick={(event) => {
            setVisibility(!visibility);

            if (visibility) {
              event.target.parentNode.classList.add("select-wrapper-focus");
            }
          }}
        >
          {selected}
        </div>
        <div className="options" data-hidden={visibility}>
          {options.map((option, index) => {
            return (
              <div
                className="option"
                data-id={index}
                value={option}
                data-clicked={selected == option ? true : false}
                onClick={() => {
                  setSelected(option);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
