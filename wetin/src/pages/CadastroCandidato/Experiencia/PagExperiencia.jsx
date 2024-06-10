import styles from "./PagExperiencia.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";
import BlocoExperiencia from "../../../components/Experiencia/BlocoExperiencia";

export default function Perfil() {

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Questionário" descricao3="Perfil" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Experiência de Trabalho</span>
                            <span className={styles["infos"]}>Para melhorar seu cadastro, se ja possui alguma experiência no mercado de trabalho, adicione-as abaixo:</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                            <BlocoExperiencia/>
                        </div>
                        <div className={styles["botaoExperiencia"]}>
                            <button>Adicionar Experiência</button>
                        </div>
                        <BotaoCadastro textoBt2="Próximo" pagDesejada1="/descricaoCandidato" pagDesejada2="/candidatoQuestionario" />
                    </div>
                </div>
            </div>
        </>
    );
}