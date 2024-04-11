import Logo from "../../utils/assets/imgLogo.png"
import styles from "./Header.module.css"

export default function Header({
    doisBotoes,
}) {
    return (
        <header>
            <div className={styles["div_container_header"]}>
                <div className={styles["div_header"]}>
                    <img src={Logo} alt="" className={styles["img_logo"]} />
                    {
                        doisBotoes ?
                            <div style={{display: "flex", gap: "1rem"}}>
                                <button className={styles["bt_entrar"]} >Entrar</button>
                                <button className={styles["bt_entrar"]} >Entrar</button>
                            </div> :
                            <button className={styles["bt_entrar"]} >Entrar</button>
                    }
                </div>
            </div>
        </header>
    );
}
