import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>"Você está gastando muito"</p>}
    </div>
  );

  // const random = Math.random();
  // const ativo = false;

  // function monstrarNome(sobrenome) {
  //   return "Bruno " + sobrenome;
  // }

  // const carro = {
  //   rodas: "4",
  //   marca: "Ford",
  // };

  // const estiloH1 = {
  //   color: "blue",
  //   fontSize: "20px",
  //   fontFamily: "Helvetica",
  // };

  // return (
  //   <>
  //     <div>
  //       <h1 style={estiloH1}>TESTE</h1>
  //       <p style={{ color: "green" }}>Sempre aberta!</p>
  //     </div>
  //     {titulo}
  //     {monstrarNome("Pires")}
  //     <p>{new Date().getFullYear()}</p>
  //     <p>{carro.marca}</p>
  //     <p>{carro.rodas}</p>
  //     <p>
  //       {true ? "asdfasd" : "jasodfaj"} - {-10}
  //     </p>
  //     <p className={ativo ? "ativo" : "inativo"}>{random * 100}</p>
  //   </>
  // );
};

export default App;
