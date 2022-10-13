import Botao from "../botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";

export default function Cronometro(){
    console.log('conversão: ', timeToSeconds('01:01:01'));
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
            <Relogio/>
            </div>
            <Botao>
                Vai
            </Botao>
        </div>
    )
}