import styles from "./PopUpSuccess.module.css"
import ButtonFilled from "../../Buttons/ButtonFilled/ButtonFilled"


export default function PopUpSuccess(props){
    return(
        <>
            <div className={styles["pop-up"]}>
                <img src={props.imagem} alt={props.alt} className={styles["imagem-pop-up"]}/>
                <h2 className={styles["mensagem-sucesso"]}>{props.texto}</h2>
                <ButtonFilled texto={props.textoBotao1}/>
            </div>
        </>
    )
}