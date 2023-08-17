import './App.css';
import { useState } from 'react';
import FunctionSimples from './Exemplos/functions/functionSimples';
import FunctionDupla from './Exemplos/functions/functionDupla';
import PropsSimples from './Exemplos/props/PropsSimples';
import Children from './Exemplos/props/Children'
import Botao from './Exemplos/components/Botao';
function App() {
  const [variavel,functionMudarValorVariavel] = useState("tipo dela")
  const [logado,setLogado] = useState(false)
  const [numero,setNumero] = useState(0)
  var texto = "um texto"

  function alterarTexto(){
    functionMudarValorVariavel("alterei")
  }
  return (
    <div className="App">

      <Botao
        classe="button"
        id="red"
      >
        Esconder
      </Botao> <Botao
        classe="button"
        id="purple"
      >
        Esconder
      </Botao> <Botao
        classe="button"
        id="orange"
      >
        Esconder
      </Botao> <Botao
        classe="button"
        id="red"
      >
        Esconder
      </Botao> <Botao
        classe="button"
        id="white"
      >
        Esconder
      </Botao>
      <Botao
        id="blue"
        classe="button"
      >
        Mostrar
      </Botao>
      <FunctionSimples/>
      <FunctionDupla/>
      {numero}
      <PropsSimples 
        caracteristica = "do lado esquerdo é o nome da propriedade"
        goiabada = "do direito é o que desejo enviar"
        numero = {numero}
        variavel = {variavel}
      />
      <Children>enviando um children pro componente</Children>
      {variavel}

      <button   
        onClick={()=>alterarTexto()}
      >
        Clique para alterar o texto
      </button>
    </div>
  );
}

export default App;
