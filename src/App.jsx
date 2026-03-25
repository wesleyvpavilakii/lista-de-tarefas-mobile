// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header'
// import Title from './components/Title'

import { useEffect, useState } from "react";
import Button from "./components/Button";

// export default function App(){
//   const [contador, setContador] = useState(0);

//   useEffect(() => {console.log("EXECUTOU");
//   }, [contador]);

//   function incrementar(){
//    setContador(contador + 2);
//   }

//   return (
//     <main>

//       <Header />
//       <Title titulo="Show da Pecuária"
//        subtitulo="Pesadão"/>

//        <p>
//         Valor do contador: {contador}
//        </p>

//        <button onClick={incrementar}> Incrementar</button>

//     </main>
//   )
// }

export default function App() {

  const [atividade, setAtividade] = useState("");
  const [listaAtividade, setListaAtividade] = useState([]);

  function atualizarAtividade(valor){
    setAtividade(valor);
  }

  function adicionarAtividade(){

    const novaTarefa = {
      "id": listaAtividade.length + 1,
      texto: atividade,
      feita: false
    };

    setListaAtividade([...listaAtividade, novaTarefa]);
    setAtividade("");
  }

  function marcarComoFeita(id){

    const novaLista = listaAtividade.map(atv => {
      if (atv.id === id) {
        return {
          ...atv,
          feita: !atv.feita
        }
      }
      return atv;
    });

    setListaAtividade(novaLista);
  }

  function removerAtividade(id){

    const novaLista = listaAtividade.filter(atv => atv.id !== id);
    setListaAtividade(novaLista);
  }

  return (
    <div>

      <h2>Lista de Tarefas</h2>

      <input 
        type="text" 
        value={atividade} 
        onChange={e => atualizarAtividade(e.target.value)}
        placeholder="Digite uma tarefa"/>

      <Button funcao={adicionarAtividade} btnText="Adicionar"/>

      <ul>
        {listaAtividade.map(atv =>(
          <li key={atv.id}>

            <input 
              type="checkbox"
              checked={atv.feita}
              onChange={() => marcarComoFeita(atv.id)}/>
              {atv.texto}

            <Button
              funcao={() => removerAtividade(atv.id)}
              btnText="Remover"/>

          </li>
        ))}
      </ul>

    </div>
  )
}


