import styles from "./BlocoExperiencia.module.css";

export default function BlocoExperiencia() {
    return (
        <>
            <div className={styles["caixaExperiencia"]}>
                <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                        <label htmlFor="">Cargo: </label>
                        <span>*</span>
                    </div>
                    <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o cargo" />
                </div>
                <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                        <label htmlFor="">Descrição: </label>
                        <span>*</span>
                    </div>
                    <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Descreva a função" />
                </div>
                <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                        <label htmlFor="">Data Inicio: </label>
                        <span>*</span>
                    </div>
                    <input type="date" className={styles["input"]} style={{ width: "80%" }} />
                </div>
                <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                        <label htmlFor="">Data Fim: </label>
                        <span>*</span>
                    </div>
                    <input type="date" className={styles["input"]} style={{ width: "80%" }} />
                </div>
            </div>
        </>
    );
}