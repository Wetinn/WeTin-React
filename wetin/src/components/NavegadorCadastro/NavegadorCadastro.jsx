import IconNavegacao from "./SecaoCadastro";
import styles from "./MenuCadastro.module.css"
import { useNavigate } from "react-router-dom";

export default function Navegador(props) {
    const navigate = useNavigate();

    return (
        <div className={styles["container_menu"]}>
            <div className={styles["menu"]}>
                <IconNavegacao cor={props.ativa}  descricao = {props.descricao1} n="1" color={props.textoAtivo} onClick={() => navigate(props.bolinha1)}/>
                <IconNavegacao cor="#F2B705"  descricao = {props.descricao2} n="2" color="" onClick={() => navigate(props.bolinha2)}/>
                <IconNavegacao cor="#F2B705"  descricao = {props.descricao3} n="3" color="" onClick={() => navigate(props.bolinha3)}/>
            </div>
        </div>

    );
}