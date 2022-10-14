import Botao from "../botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa| undefined,
    fimTarefa: () => void
}

export default function Cronometro({selecionado, fimTarefa}: Props){
    const [tempo, setTime] = useState<number>();

    useEffect(() =>{
        if(selecionado?.tempo){
            setTime(timeToSeconds(selecionado.tempo));
        }
    },[selecionado]);
    
    function countdown(count: number = 0){
        setTimeout(() => {
            if(count > 0){
                setTime(count - 1);
                return countdown(count - 1);
            }
            fimTarefa();
        }, 1000); 
        // valor de 1000 = milisegundos ou 1 segundo
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => countdown(tempo)}>
                Vai
            </Botao>
        </div>
    )
}