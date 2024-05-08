import styles from './pagamento.module.css';
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
// import { useNavigate } from "react-router-dom";
import BotaoCadastro from '../../../components/botaoCadastro/BotaoCadastro';


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
                            <form>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Número do cartão: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o número do cartão" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Nome no cartão: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o nome no cartão" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">CVV: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o código de segurança do cartão (CVV)" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de validade: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite a data de validade do cartão" />
                                </div>
                            </form>
                        </div>
                        {/* <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick>Voltar</button>
                            <button className={styles["btProximo"]} onClick>Próximo</button>
                        </div> */}

                        <BotaoCadastro textoBt2="Concluir" pagDesejada1="/recrutadorDescricao" pagDesejada2="/login" />

                    </div>
                </div>

            </div>
        </>
    );
}