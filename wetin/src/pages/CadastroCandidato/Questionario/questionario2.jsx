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
                            <Pergunta numeroPergunta=" 3: " pergunta="Me adapto facilmente a ambientes novos e não tenho medo de sair da minha zona de conforto."/>
                            <Pergunta numeroPergunta=" 4: " pergunta=" Prefiro me aproximar de alguém e iniciar uma conversa do que esperar ela vir falar comigo."/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/candidatoQuestionario" pagDesejada2="/candidatoAnexo"/>
                    </div>
                </div>
            </div>
        </>
    );
}