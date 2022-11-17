import "./styles.css";
import { InputText, InputValue } from "../Input";
import { ButtonPrimary } from "../Button";
import { Select } from "../Select";

function getFormData(form) {
  let data = {};
  const formElements = form.querySelectorAll("input, [data-selected]");

  formElements.forEach((formElement) => {
    if (formElement.tagName == "INPUT") {
      data = {
        ...data,
        [formElement.name]: formElement.value,
      };
    } else {
      data = {
        ...data,
        category: formElement.getAttribute("data-selected"),
      };
    }
  });

  return data;
}

export default function Form({ registers, setRegisters }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.target;

        const data = getFormData(form);

        const dataIsNotEmpty = Object.values(data).every(
          (value) => value != ""
        );

        if (dataIsNotEmpty) {
          setRegisters([...registers, data]);
        } else {
          // toastfy
        }
      }}
    >
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
