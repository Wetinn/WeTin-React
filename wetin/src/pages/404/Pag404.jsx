import styles from "./Pag404.module.css"
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";


export default function Pag404() {
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <span style={{color:"#025373", fontSize:"12rem", fontWeight:"600"}}>
                            404
                        </span>
                        <span style={{color:"black", fontSize:"1.5rem", fontWeight:"600"}}>
                        Opss... Não achamos a página que você está procurando
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}