import styles from "./CardBeneficio.module.css"

export default function CardBeneficio(props) {
    return(
        <>
        
        <div className={styles["caixa_card"]}>
            <div className={styles["imagem_card"]}>
                <img src={props.imagem_card} alt="" />
            </div>

            <div className={styles["titulo_card"]}>
                <span>
                    {props.titulo_card}
                </span>
            </div>

            <div className={styles["conteudo_card"]}>
                <span>
                    {props.conteudo_card}
                </span>
            </div>
        </div>
        
        </>
    );
}