import React from "react";

import Button from "../../components/Button";

import "./style.css";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

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
    </>
  );
};

export default Home;
