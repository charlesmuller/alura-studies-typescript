import Botao from "../botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa| undefined
}

export default function Cronometro({selecionado}: Props){
    const [tempo, setTime] = useState<Number>();

    useEffect(() =>{
        if(selecionado?.tempo){
            setTime(timeToSeconds(selecionado?.tempo));
        }
    },[selecionado]);
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
            </div>
            <Botao>
                Vai
            </Botao>
        </div>
    )
}