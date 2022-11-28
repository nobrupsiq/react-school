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
