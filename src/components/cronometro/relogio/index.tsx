import style from './Relogio.module.scss';

interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0 }: Props){
    const minutes = Math.floor(tempo / 60);
    const seconds = tempo % 60;
    const [minuteTen, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnity] = String(seconds).padStart(2, '0');
    return(
        <>
        <span className={style.relogioNumero}>minuteTen</span>
        <span className={style.relogioNumero}>minuteUnity</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>secondTen</span>
        <span className={style.relogioNumero}>secondUnity</span>
        </>
    )
}