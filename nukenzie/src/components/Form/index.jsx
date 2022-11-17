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
      const formElements = form.querySelectorAll("input");

      formElements.forEach(({name, value}) => {
        data = {
          ...data,
          [name]: value
        }
      })

      console.log(data);
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
