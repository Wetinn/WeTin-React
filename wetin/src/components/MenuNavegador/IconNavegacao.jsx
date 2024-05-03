import styles from "./MenuNavegacao.module.css";
import { useNavigate } from "react-router-dom";

export default function IconNavegacao(props) {
    const navigate = useNavigate();
    return (
        <div className={styles["item"]}>
            <div className={styles["bolinha"]} style={{ backgroundColor: props.cor }} onClick={() => navigate(props.pag)}>
                <img src={props.icon} alt="" class="imgIcon" />
            </div>
            <span className={styles["descricao_menu"]} style={{color: props.fonte}}>
                {props.descricao}
            </span>
        </div>
    );
}