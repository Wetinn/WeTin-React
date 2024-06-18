import styles from './criarSenha.module.css';
import Header from '../../../components/Header/Header';
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import BtLogin from '../../../components/botaoLogin/BtLogin';
import iconOlho from "../../../utils/assets/iconOlho.png";

export default function CriarSenha() {
    const mostrarSenha = () => {
        const senhaInput = document.getElementById('inputLoginSenha');

        if (senhaInput.type === "password") {
            senhaInput.type = "text";
        } else {
            senhaInput.type = "password";
        }
    };

    return (
        <>

            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} />
                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Criar uma nova senha
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Para trocar a sua senha precisamos que você informe uma nova para substituir ela!
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>
                            <div className={styles["inputSenha"]}>
                                <label htmlFor="inputLoginSenha">Nova Senha:</label>
                                <div className={styles["input"]}>
                                    <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} />
                                    <div className={styles["divImg"]}>
                                        <img src={iconOlho} alt="Mostrar senha" onClick={mostrarSenha} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles["inputSenha"]}>
                                <label htmlFor="inputLoginSenha">Confirmar Nova Senha:</label>
                                <div className={styles["input"]}>
                                    <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} />
                                    <div className={styles["divImg"]}>
                                        <img src={iconOlho} alt="Mostrar senha"  />
                                    </div>
                                </div>
                            </div>
                            </div>

                            <BtLogin textoBotao="Trocar Senha" />
                        </div>
                    </div>
                </div>
            </>
            );
}