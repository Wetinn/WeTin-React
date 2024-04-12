import styles from "./Header.module.css"

export default function Header({
    doisBotoes, textoBotao1, textoBotao2, Logo
}) {
    return (
        <header>
            <div className={styles["div_container_header"]}>
                <div className={styles["div_header"]}>
                    <img src={Logo} alt="" className={styles["img_logo"]} />
                    {
                        doisBotoes ?
                            <div style={{display: "flex", gap: "1rem"}}>
                                <button className={styles["bt_entrar"]} >{textoBotao1}</button>
                                <button className={styles["bt_entrar"]} >{textoBotao1}</button>
                            </div> :
                            <button className={styles["bt_entrar"]} >{textoBotao1 || "Entrar"}</button>
                    }
                </div>
            </div>
        </header>
    );
}
