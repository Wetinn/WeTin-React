import styles from "./anexo.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";

export default function Perfil() {

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Questionário" descricao3="Perfil" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Perfeito! Estamos quase lá! Agora precisamos que você adicione uma imagem para ser sua foto de perfil</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <div className={styles["blocoAnexo"]}>
                                <div className={styles["perfil"]}>

                                </div>
                                <div className={styles["arquivo"]}>
                                    <span>Anexe uma imagem no campo abaixo</span>
                                    <div className={styles["arrastarArquivo"]}>
                                        <div className={styles["texto"]}>
                                            <span>
                                                Arraste a imagem que você quer anexar ou clique aqui para escolher um arquivo do seu computador
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BotaoCadastro textoBt2="Concluir" pagDesejada1="/candidatoQuestionario2" pagDesejada2="/login" />
                    </div>
                </div>
            </div>
        </>
    );
}