import styles from "./PopUpConfirmation.module.css"
import ButtonFilled from "../../Buttons/ButtonFilled/ButtonFilled"
import ButtonOutline from "../../Buttons/ButtonOutline/ButtonOutline"
import ButtonDanger from "../../Buttons/ButtonDanger/ButtonDanger"

export default function PopUpConfirmation(props) {
    return (
        <>
            <div className={styles["overlay"]}>
                <div className={styles["pop-up"]}>
                    <h2 className={styles["mensagem-confirmacao"]}>{props.texto}</h2>
                    <div className={styles["botoes"]}>
                        {props.danger &&
                            <ButtonDanger texto={props.textoBotao1} onClick={props.onDelete} />
                        }
                        {!props.danger &&
                            <ButtonFilled texto={props.textoBotao1} />
                        }
                        <ButtonOutline texto={props.textoBotao2} onClick={props.onClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}