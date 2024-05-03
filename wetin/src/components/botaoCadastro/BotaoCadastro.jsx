import styles from './BotaoCadastro.module.css'
import { useNavigate } from "react-router-dom";

export default function BotaoCadastro(props) {
    const navigate = useNavigate();
    return (

        <div className={styles["botoes"]}>
            <button className={styles["btVoltar"]} onClick={() => navigate(props.pagDesejada1)}>Voltar</button>
            <button className={styles["btProximo"]} onClick={() => navigate(props.pagDesejada2)}>{props.textoBt2}</button>
        </div>

    );
}