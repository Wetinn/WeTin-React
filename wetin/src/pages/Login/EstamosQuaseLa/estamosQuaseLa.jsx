import styles from "./estamosQuaseLa.module.css"
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import BtLogin from "../../../components/botaoLogin/BtLogin"

export default function criarSenha() {
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} textoBotao1={"Ir para Página Inicial"} />

                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Enviamos um código de confirmação!
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Agora é só acessar o seu e-mail e entrar no link que enviamos para você e digitar o código de confirmação. Se você não achar ele na sua caixa de entrada, procure ele na sessão de Spam
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>

                            <div id="teste" style={{ display: "flex", height: "12vh", width: "100%", display: "flex", alignItems: "center" }}>
                                <div style={{ with: "100%", height:"12vh",display:"flex", flexDirection:"column",justifyContent:"space-around" }}>
                                    <label htmlFor="inputLoginEmail" className={styles["labelCodigo"]}>Código:</label>
                                    <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui o código" />
                                </div>
                            </div>

                            <BtLogin textoBotao={"Confirmar Código"} pagDesejada={"/criarSenha"} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}