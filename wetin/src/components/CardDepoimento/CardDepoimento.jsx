import styles from "./CardDepoimento.module.css"

export default function CardDepoimento(props) {
    
    return(
        <>
        <div className={styles["caixaCard"]}>
            <div className={styles["imagemCard"]}>
                <img src={props.imgDepoimento} alt="" />
            </div>

            <div className={styles["informacoesCard"]}>
                <div className={styles["titulo"]}>
                    <span>
                        {props.tituloCard}
                    </span>
                </div>
                <div className={styles["comentario"]}>
                    <span>
                        {props.depoimento}
                    </span>
                </div>
            </div>
        </div>
        </>
    );

}