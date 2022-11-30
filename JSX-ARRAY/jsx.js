// Keys
// O JSX necessita de uma key única para cada elemento da Array.

const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};

// Map
// É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.

const filmes = ["Before Sunrise", "Before sunset", "Before Midnight"];

return (
  <ul>
    {filmes.map((filme) => (
      <li key={filme}>{filme}</li>
    ))}
  </ul>
);

// OBS: sem as chaves depois do arrow => e passando () e funcao ja vai ser retornada direto

// ARRAY DE OBJETOS
// O cenário mais comum é trabalhar com array's de objetos

const livros = [
  { nome: "A game of Thrones", ano: 1996 },
  { nome: "A Clash of Kings", ano: 1998 },
  { nome: "A Storm of Swords", ano: 2000 },
];

return (
  <ul>
    {livros
      .filter((livro) => livro.ano >= 1998)
      .map((livro) => (
        <li key={livro.nome}>
          {livro.nome}, {livro.ano}
        </li>
      ))}
  </ul>
);


// JSX ARRAY EXERCICIO

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ['#29d8d5', '#252a34', '#fc3766']
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ['#ffd045', '#d4394b', '#f37c59']
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ['#365069', '#47c1c8', '#f95786']
  }
];

const app = () => {
  const dados = produtos.filter(({ preco }) => Number(preco.replace("R$", "")) > 1500)
  console.log(dados)

  return < section >
    {dados.map(({ id, nome, preco, cores }) => (
      <div key={id}>
        <h1>{nome}</h1>
        <p>Preço: {preco}</p>
        <ul>
          {cores.map((cor) => (
            <li style={{ backgroundColor: cor, color: "white" }} key={cor}>{cor}</li>
          ))}
        </ul>
      </div>
    ))}
  </ section>
};
