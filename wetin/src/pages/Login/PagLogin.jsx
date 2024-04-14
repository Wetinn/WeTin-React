import styles from "./Login.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import Senha from "../../components/inputSenha/InputSenha";
import BtLogin from "../../components/botaoLogin/BtLogin";

export default function Login() {
    return (

        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} />

                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Entrar
                            </span>
                        </div>

                        <div className={styles["blocoErro"]}>
                            <span>
                                Ops! O seu e-mail ou sua senha estão incorretos
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>
                            <div className={styles["inputEmail"]}>
                                <label htmlFor="inputLoginEmail">E-mail:</label>
                                <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui" />

                            </div>

                            <Senha textoLabel={"Senha:"} esqueciSenha/>

                            <BtLogin textoBotao="Entrar" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}