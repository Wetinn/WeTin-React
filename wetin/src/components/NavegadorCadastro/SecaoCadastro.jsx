import styles from "./MenuCadastro.module.css"

export default function SecaoCadastro(props) {
    return (
        <div className={styles["item"]}>
            <div className={styles["alinhamento"]}>
                <div className={styles["bolinha"]} style={{ backgroundColor: props.cor, color: props.color }}>
                    <span>{props.n}</span>
                </div>
                <span className={styles["descricao_menu"]}>
                    {props.descricao}
                </span>
            </div>
        </div>
    );
}