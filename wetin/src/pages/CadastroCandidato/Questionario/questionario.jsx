import styles from "./questionario.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";
import Pergunta from "../../../components/Pergunta/pergunta"

export default function Questionario() {
    
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Questionário" descricao3="Perfil"/>

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Selecione a opção que melhor reflete a sua opiniões sobre cada afirmação.</span>
                        </div>
                        <div className={styles["perguntasBloco"]}>
                            <Pergunta numeroPergunta=" 1: " pergunta="Eu consigo manter a calma, mesmo em situações que estou sob muita pressão."/>
                            <Pergunta numeroPergunta=" 2: " pergunta="Busco constantemente aprender e me desenvolver nas mais diversas áreas de estudo."/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/candidatoEndereco" pagDesejada2="/candidatoQuestionario2"/>
                    </div>
                </div>
            </div>
        </>
    );
}