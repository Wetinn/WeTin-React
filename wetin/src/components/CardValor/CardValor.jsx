import styles from "./CardValor.module.css";


export default function CardValor(props) {
    return(
        <>
        
        <div className={styles["caixa_card"]}>
            <div className={styles["imagem_valor"]}>
                <img src={props.imagem_valor} alt="" />
            </div>
            
            <div className={styles["titulo_card"]}>
                <span>
                    {props.titulo_valor}
                </span>
            </div>

            <div className={styles["descricao_valor"]}>
                <span>
                    {props.descricao_valor}
                </span>
            </div>
        </div>

        </>
    );
}