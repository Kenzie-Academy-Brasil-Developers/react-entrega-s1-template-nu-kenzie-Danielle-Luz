import "./styles.css";
import { InputText, InputValue } from "../Input";
import { ButtonPrimary } from "../Button";
import { Select } from "../Select";

export default function Form({registers, setRegisters}) {
  return (
    <form className="form" onSubmit={event => {
      let data = {};
      const form = event.target;
      const formElements = [...form.children];

      formElements.forEach(({name, value, tagName}) => {
        if (tagName == "INPUT") {
          data = {
            ...data,
            [name]: value
          }
        }
      })

      console.log(data);
    }}>
      <InputText
        placeholder="Digite aqui sua descrição"
        label="Descrição"
        info="Ex: Compra de roupas"
      />
      <div className="input-group">
        <InputValue onChange={() => {}} label="Valor" />
        <Select options={["Entrada", "Despesa"]} label="Tipo de valor" />
      </div>
      <ButtonPrimary text="Inserir valor" />
    </form>
  );
}
