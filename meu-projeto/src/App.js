// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  // crie uma constante e atribua valor a ela Glauce
  const name = 'Glauce'
  const newname = name.toLocaleUpperCase()

  function sum(a, b) {
    return a + b
  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá , {name} ! Ou se preferir {newname}</h1>
        <p>Meu primeiro app</p>
        <p>Podemos somar com Soma {2 + 2}</p>
        <p>Ou suar função para somar com {sum(1, 2)}</p>
        {/* incluindo imagem dinamica */}
        <img src={url} alt="Minha imagem" />
        <HelloWorld />
        <Frase />
        {/* Inserindo a propriedade  */}
        <SayMyName nome="Maria da propriedade do componente" />
        <SayMyName nome="João também esta na prorpiedade como" />
        <p>Vou colocar as minhas pessoas do meu componente que tem 4 propriedades</p>
        <Pessoa
          nome="Primeira pessoa"
          idade="28"
          profissao="Programador"
          foto={url}
        />
        <Pessoa
          nome="Segunda pessoa"
          idade="40"
          profissao="Programador"
          foto={'https://via.placeholder.com/150'}
        />
        <List />
      </header>
    </div>
  );
}

export default App;