import styles from "./Login.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg"
import iconOlho from "../../utils/assets/iconOlho.png"

export default function Login() {
    return (

        <>

            <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo}/>

            <div className={styles["containner_login"]}>
                <div className={styles["blocoLogin"]}>
                    <div className={styles["tituloBloco"]}>
                        <span>
                            Entrar
                        </span>
                    </div>

                    <div className={styles["blocoErro"] }>
                        <span>
                            Ops! O seu e-mail ou sua senha estão incorretos
                        </span>
                    </div>

                    <div className={styles["inputsBloco"]}>
                        <div className={styles["inputEmail"]}>
                            <label htmlFor="inputLoginEmail">E-mail:</label>
                            <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui"/>
                            
                        </div>
                        <div className={styles["inputSenha"]}>
                            <label htmlFor="inputLoginSenha">Senha:</label>
                            <div className={styles["teste"]}>
                            <input type="text" className={styles["inputLoginSenha"]} placeholder="Digite aqui"/>
                            <img src={iconOlho} alt="" />
                            </div>
                            
                        </div>
                        <div className={styles["btEntrar"]}>
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}