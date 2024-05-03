import styles from "./pergunta.module.css"

export default function Pergunta(props) {
    return (
        <>
            <div className={styles["pergunta"]}>
                <div className={styles["tituloPergunta"]}>
                    <span className={styles["negrito"]}>
                        Pergunta {props.numeroPergunta}
                    </span>
                    <span>
                        {props.pergunta}
                    </span>
                </div>

                <div className={styles["respostas"]}>
                    <div className={styles["discordoT"]} >
                        Discordo totalmente
                    </div>

                    <div className={styles["discordoP"]}>
                        Discordo parcialmente
                    </div>

                    <div className={styles["nemCnemD"]}>
                        Não concordo, nem discordo
                    </div>

                    <div className={styles["concordoP"]}>
                        Concordo parcialmente
                    </div>

                    <div className={styles["concordoT"]}>
                        Concordo totalmente
                    </div>
                </div>

            </div>
        </>
    );
}