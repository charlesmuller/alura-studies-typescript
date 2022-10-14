import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnt => tarefasAnt.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function fimTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnt => tarefasAnt.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
     <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista 
       tarefas={tarefas} 
       selecTarefa={selecTarefa}
       />
       <Cronometro 
          selecionado={selecionado}
          fimTarefa={fimTarefa}
       />
     </div>
  )
 }

 export default App;