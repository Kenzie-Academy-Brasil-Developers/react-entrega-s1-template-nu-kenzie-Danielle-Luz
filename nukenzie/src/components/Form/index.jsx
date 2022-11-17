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

function setFilteredRegistersList(
  filteredRegisters,
  setFilteredRegisters,
  data
) {
  const hasFilteredCategory = filteredRegisters.every((register) => {
    return register.category == data.category;
  });

  const isFilteredByAll = filteredRegisters.some((register) => {
    return register.category == data.category;
  });

  if (hasFilteredCategory || isFilteredByAll) {
    setFilteredRegisters([...filteredRegisters, data]);
  }
}

export default function Form({
  registers,
  setRegisters,
  filteredRegisters,
  setFilteredRegisters,
}) {
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

          setFilteredRegistersList(
            filteredRegisters,
            setFilteredRegisters,
            data
          );
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
        <InputValue name="price" label="Valor" />
        <Select options={["Entrada", "Despesa"]} label="Tipo de valor" />
      </div>
      <ButtonPrimary text="Inserir valor" />
    </form>
  );
}
