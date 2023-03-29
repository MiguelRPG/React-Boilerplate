import React, { useState } from "react";

import "./style.css";

import Button from "../../components/Button";
import Input, { Email, Tel, Date } from "../../components/Input";
import Select from "../../components/Select";
import CheckboxGroup from "../../components/Checkbox";
import RadioGroup from "../../components/Radiobox";
import Submit from "../../components/Submit";

const Home = () => {
  // Input
  const [name, setName] = useState("");
  // /Input

  // Button
  const handleClick = () => {
    console.log("Button clicked");
  };
  // /Button

  // Select
  const [selectValue, setSelectValue] = useState("");

  const selectOptions = [
    { value: "option1", label: "Opção 01" },
    { value: "option2", label: "Opção 02" },
    { value: "option3", label: "Opção 03" },
  ];

  const selectChange = (value) => {
    setSelectValue(value);
  };

  // /Select

  // Radio

  const [checkboxOptions, setCheckboxOptions] = useState([
    {
      name: "checkbox01",
      id: "checkbox01",
      value: "1",
      label: "Normal",
      checked: false,
    },
    {
      name: "checkbox02",
      id: "checkbox02",
      value: "2",
      label: "Desabilitado",
      checked: false,
      disabled: true,
    },
    {
      name: "checkbox03",
      id: "checkbox03",
      value: "3",
      label: "Inválido",
      checked: false,
      className: "error",
    },
    {
      name: "checkbox04",
      id: "checkbox04",
      value: "4",
      label: "Correto",
      checked: false,
      className: "valid",
    },
  ]);
  
  const [checkboxOptions02, setCheckboxOptions02] = useState([
    {
      name: "checkbox01",
      id: "checkbox01",
      value: "1",
      label: "Normal",
      checked: false,
    },
    {
      name: "checkbox02",
      id: "checkbox02",
      value: "2",
      label: "Desabilitado",
      checked: false,
      disabled: true,
    },
    {
      name: "checkbox03",
      id: "checkbox03",
      value: "3",
      label: "Inválido",
      checked: false,
      className: "error",
    },
    {
      name: "checkbox04",
      id: "checkbox04",
      value: "4",
      label: "Correto",
      checked: false,
      className: "valid",
    },
  ]);

  const checkboxChange = (value, checked) => {
    const newOptions = checkboxOptions.map((option) => {
      if (option.value === value) {
        return { ...option, checked };
      } else {
        return option;
      }
    });
    setCheckboxOptions(newOptions);
  };
  
  const checkboxChange02 = (value, checked) => {
    const newOptions = checkboxOptions02.map((option) => {
      if (option.value === value) {
        return { ...option, checked };
      } else {
        return option;
      }
    });
    setCheckboxOptions02(newOptions);
  };

  // /Checkbox

  // Radio

  const [radioOptions, setRadioOptions] = useState([
    {
      name: "radio01",
      id: "radio01",
      value: "1",
      label: "Normal",
      checked: false,
    },
    {
      name: "radio02",
      id: "radio02",
      value: "2",
      label: "Desabilitado",
      checked: false,
      disabled: true,
    },
    {
      name: "radio03",
      id: "radio03",
      value: "3",
      label: "Inválido",
      checked: false,
      theme: "invalid",
    },
    {
      name: "radio04",
      id: "radio04",
      value: "4",
      label: "Correto",
      checked: false,
      theme: "valid",
    },
  ]);

  const radioChange = (value, checked) => {
    const newOptions = radioOptions.map((option) => {
      if (option.value === value) {
        return { ...option, checked };
      } else {
        return option;
      }
    });
    setRadioOptions(newOptions);
  };

  // /Radio

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };
  // /Submit

  return (
    <>
      <h1>React-Boilerplate</h1>
      <p>
        O React-Boilerplate é um projeto base em React que inclui todas as
        configurações essenciais para iniciar um novo projeto React de forma
        rápida e fácil. Este projeto contém as seguintes configurações
        pré-configuradas:
      </p>
      <ul>
        <li>React Router para gerenciamento de rotas</li>
        <li>Webpack para empacotamento de arquivos e transpilação de código</li>
        <li>Reset CSS para normalização de estilos entre navegadores</li>
        <li>
          Um botão personalizável que pode ser facilmente integrado em qualquer
          projeto
        </li>
      </ul>
      <p>
        Com o React-Boilerplate, você pode pular a configuração inicial do
        projeto e começar a trabalhar no que realmente importa - o
        desenvolvimento do seu aplicativo React. Além disso, este projeto é
        altamente personalizável e pode ser facilmente adaptado às necessidades
        do seu projeto específico.
      </p>
      <form onSubmit={handleSubmit}>
        <Button theme="disabled" disabled>
          Desativado
        </Button>
        <Button theme="invalid" onClick={handleClick}>
          Inválido
        </Button>
        <Button theme="active" onClick={handleClick}>
          Ativo
        </Button>
        <Button theme="correct" onClick={handleClick}>
          Correto
        </Button>

        <Input
          label="Nome"
          type="text"
          value={name}
          defaultValue="Miguel RPG"
          placeholder="Digite o seu nome"
          name="field-exp-01"
          id="field-exp-01"
          className="field-exp-01"
          required="true"
          autocomplete="name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Empresa"
          type="text"
          placeholder="Digite o sua empresa"
          name="field-exp-02"
          id="field-exp-02"
          required="true"
          autocomplete="organization"
          status="error"
          errorMsg="Informe sua empresa"
        />

        <Input
          label="Endereço"
          type="text"
          placeholder="Seu endereço"
          name="field-exp-03"
          id="field-exp-03"
          autocomplete="street-address"
          status="valid"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Senha com erro"
          name="field-pwd-01"
          id="field-pwd-01"
          autocomplete="new-password"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Senha válida"
          name="field-pwd-02"
          id="field-pwd-02"
          autocomplete="new-password"
          status="valid"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Senha com erro"
          name="field-pwd-03"
          id="field-pwd-03"
          autocomplete="new-password"
          status="error"
        />

        <Email
          label="E-mail"
          placeholder="Este campo é de email"
          name="field-email-01"
          id="field-email-01"
        />

        <Tel
          label="Telefone"
          placeholder="Seu telefone"
          name="field-tel-01"
          id="field-tel-01"
        />

        <Date
          label="Data de Nascimento"
          name="field-date-01"
          id="field-date-01"
          min="1950-01-01"
          max="2012-01-01"
          required
        />

        <Select
          label="Selecione"
          name="select-01"
          id="select-01"
          value={selectValue}
          onChange={selectChange}
          options={selectOptions}
          disabled
        />
        <Select
          label="Selecione"
          name="select-02"
          id="select-02"
          value={selectValue}
          onChange={selectChange}
          options={selectOptions}
        />
        <Select
          label="Selecione (válido)"
          name="select-03"
          id="select-03"
          status="valid"
          value={selectValue}
          onChange={selectChange}
          options={selectOptions}
        />
        <Select
          label="Selecione (com erro)"
          name="select-04"
          id="select-04"
          value={selectValue}
          onChange={selectChange}
          options={selectOptions}
          required
          status="error"
          errorMsg="Selecione uma opção válida"
        />

        <CheckboxGroup
          label="Selecione nenhum ou vários"
          options={checkboxOptions}
          name="checkbox-group-01"
          id="checkbox-group-01"
          onChange={checkboxChange}
        />
        
        <CheckboxGroup
          label="Selecione ao menos um ou vários (com erro)"
          options={checkboxOptions02}
          name="checkbox-group-02"
          id="checkbox-group-02"
          onChange={checkboxChange02}
          required
          status="error"
          errorMsg="Selecione ao menos uma opção"
        />

        <RadioGroup
          options={radioOptions}
          name="radio-group-01"
          onChange={radioChange}
        />

        <Submit className="submit-button" label="Enviar" />
      </form>
    </>
  );
};

export default Home;
