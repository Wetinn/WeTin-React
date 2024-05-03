import styles from './pagamento.module.css';
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";

export default function Pagamento() {
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Cadastro de pagamento</span>
                            <span className={styles["infos"]}>Para finalizar seu cadastro precisamos que você coloque as informações do seu melhor cartão de crédito onde será cobrada a mensalidade da nossa plataforma <b>(R$50,00)</b></span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Nome no cartão:</label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]}/>
                            </div>

                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Número do cartão:</label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]}/>
                            </div>

                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Data de Validade</label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{width:"30%"}}/>
                            </div>

                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CVV</label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{width:"30%"}}/>
                            </div>
                        </div>
                        <BotaoCadastro textoBt2="Próximo" pagDesejada1="/recrutadorEndereco" pagDesejada2="/login" />
                    </div>
                </div>

            </div>
        </>
    );
}