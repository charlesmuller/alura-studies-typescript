import { ITarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface Props extends ITarefa{ 
    selecTarefa: (tarefaSelecionada: ITarefa)=> void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecTarefa}: Props) {
    console.log("Item atual", {tarefa, tempo, selecionado, completado, id});
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
            onClick={()=>selecTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
            
                }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}