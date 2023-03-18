import React, { useState } from "react";

import "./style.css";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import CheckboxGroup from "../../components/Checkbox";
import RadioGroup from "../../components/Radiobox";

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
    { name: "checkbox01", id: "checkbox01", value: "1", label: "Normal", checked: false },
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
      theme: "invalid",
    },
    {
      name: "checkbox04",
      id: "checkbox04",
      value: "4",
      label: "Correto",
      checked: false,
      theme: "valid",
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

  // /Checkbox

  // Radio

  const [radioOptions, setRadioOptions] = useState([
    { name: "radio01", id: "radio01", value: "1", label: "Normal", checked: false },
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
        type="text"
        value={name}
        defaultValue="Miguel RPG"
        placeholder="Digite o seu nome"
        name="field-exp-01"
        id="field-exp-01"
        theme="field-exp-01"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite o seu nome"
        name="field-exp-02"
        id="field-exp-02"
        theme="error"
      />

      <Input
        type="password"
        placeholder="Digite o sua senha"
        name="field-pwd-01"
        id="field-pwd-01"
        theme=""
      />

      <Input
        type="password"
        placeholder="Senha com erro"
        name="field-pwd-02"
        id="field-pwd-02"
        theme="error"
      />

      <Select
        name="select-01"
        id="select-01"
        value={selectValue}
        onChange={selectChange}
        options={selectOptions}
        disabled
      />
      <Select
        name="select-02"
        id="select-02"
        value={selectValue}
        onChange={selectChange}
        options={selectOptions}
      />
      <Select
        name="select-03"
        id="select-03"
        theme="valid"
        value={selectValue}
        onChange={selectChange}
        options={selectOptions}
      />
      <Select
        name="select-04"
        id="select-04"
        theme="error"
        value={selectValue}
        onChange={selectChange}
        options={selectOptions}
      />

      <CheckboxGroup
        options={checkboxOptions}
        name="checkbox-group-01"
        onChange={checkboxChange}
      />

      <RadioGroup
        options={radioOptions}
        name="radio-group-01"
        onChange={radioChange}
      />

    </>
  );
};

export default Home;
