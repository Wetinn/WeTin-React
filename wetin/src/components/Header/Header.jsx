import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";


export default function Header({
    doisBotoes, textoBotao1, textoBotao2, Logo, pagDesejada, pagDesejada2
}) {
    const navigate = useNavigate();
    return (
        <header>
            <div className={styles["div_container_header"]}>
                <div className={styles["div_header"]}>
                    <img src={Logo} alt="" className={styles["img_logo"]} onClick={() => navigate("/")}/>
                    {
                        !textoBotao1 && !textoBotao2?
                        <div></div>:
                        doisBotoes ?
                            <div style={{display: "flex", gap: "1rem"}}>
                                <button className={styles["primeiroBotao"]} onClick={() => navigate(pagDesejada)}>{textoBotao1}</button>
                                <button className={styles["segundoBotao"]} onClick={() => navigate(pagDesejada2)}>{textoBotao2}</button>
                            </div> :
                            <button className={styles["primeiroBotao"]} onClick={() => navigate(pagDesejada)}>{textoBotao1}</button>
                    }
                </div>
            </div>
        </header>
    );
}
