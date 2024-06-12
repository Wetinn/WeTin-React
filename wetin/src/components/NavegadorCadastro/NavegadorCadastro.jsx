import IconNavegacao from "./SecaoCadastro";
import styles from "./MenuCadastro.module.css"
import { useNavigate } from "react-router-dom";

export default function Navegador(props) {
    const navigate = useNavigate();

    return (
        <div className={styles["container_menu"]}>
            <div className={styles["menu"]}>
                <IconNavegacao cor={props.bolinha1}  descricao = {props.descricao1} n="1" color={props.textoAtivo} />
                <IconNavegacao cor={props.bolinha2}  descricao = {props.descricao2} n="2" color="" />
                <IconNavegacao cor={props.bolinha3}  descricao = {props.descricao3} n="3" color="" />
            </div>
        </div>

    );
}