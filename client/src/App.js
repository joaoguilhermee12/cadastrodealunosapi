import { useState } from 'react';
import './App.css';
import CadastroAluno from './components/CadastroAluno';
import ListaAlunos from './components/ListaAlunos';

function App() {
  const [atualizarLista, setAtualizarLista] = useState(0);

  const handleAlunoCadastrado = () => {
    setAtualizarLista((valorAtual) => valorAtual + 1);
  };

  return (
    <div className="App">
      <CadastroAluno onAlunoCadastrado={handleAlunoCadastrado} />
      <ListaAlunos atualizarLista={atualizarLista} />
    </div>
  );
}

export default App;
