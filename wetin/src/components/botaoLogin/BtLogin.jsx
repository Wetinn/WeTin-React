import styles from "./BtLogin.module.css"

export default function btLogin(props) {
    return (
        <>
            <div className={styles["btLogin"]}>
                <button>{props.textoBotao}</button>
            </div>
        </>
    );
}