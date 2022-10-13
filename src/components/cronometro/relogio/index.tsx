import style from './Relogio.module.scss';

interface Props{
    time: Number | undefined
}

export default function Relogio({time = 0 }: Props){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const [minuteTen, minuteUnity] = String(minutes);

    return(
        <>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        </>
    )
}