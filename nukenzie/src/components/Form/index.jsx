import "./styles.css";
import { InputText, InputValue } from "../Input";
import { ButtonPrimary } from "../Button";
import { Select } from "../Select";

export default function Form({registers, setRegisters}) {
  return (
    <form className="form" onSubmit={event => {
      event.preventDefault();

      let data = {};
      const form = event.target;
      const formElements = form.querySelectorAll("input, [data-selected]");

      formElements.forEach((formElement) => {
        if (formElement.tagName == "INPUT") {
          data = {
            ...data,
            [formElement.name]: formElement.value
          }
        } else {
          data = {
            ...data,
            "category": formElement.getAttribute("data-selected")
          }
        }
      })
    }}>
      <InputText
        name="title"
        placeholder="Digite aqui sua descrição"
        label="Descrição"
        info="Ex: Compra de roupas"
      />
      <div className="input-group">
        <InputValue name="value" label="Valor" />
        <Select options={["Entrada", "Despesa"]} label="Tipo de valor" />
      </div>
      <ButtonPrimary text="Inserir valor" />
    </form>
  );
}
