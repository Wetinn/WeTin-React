import styles from "./MenuNavegacao.module.css"

export default function IconNavegacao(props) {
    return (
        <div className={styles["item"]}>
            <div className={styles["bolinha"]} style={{ backgroundColor: props.cor }}>
                <img src={props.icon} alt="" class="imgIcon" />
            </div>
            <span className={styles["descricao_menu"]}>
                {props.descricao}
            </span>
        </div>
    );
}