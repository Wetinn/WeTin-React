import IconNavegacao from "./SecaoCadastro";
import styles from "./MenuCadastro.module.css"

export default function Navegador(props) {
    return (
        <div className={styles["container_menu"]}>
            <div className={styles["menu"]}>
                <IconNavegacao cor={props.bolinha1}  descricao = {props.descricao1} n="1" color={props.texto1} />
                <IconNavegacao cor={props.bolinha2}  descricao = {props.descricao2} n="2" color={props.texto2} />
                <IconNavegacao cor={props.bolinha3}  descricao = {props.descricao3} n="3" color={props.texto3} />
            </div>
        </div>

    );
}