import styles from "./Perfil.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import InputCadastro from '../../../components/inputCadastro/InputCadastro'
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";

export default function Perfil() {
    
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Questionário" descricao3="Perfil"/>

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Para acharmos as melhores vagas para você precisamos do seu endereço</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <InputCadastro label="CEP:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o CEP de sua residência"/>
                            <InputCadastro label="Bairro:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o bairro de sua residência"/>
                            <InputCadastro label= "Rua:" tamanhoInput="75%" textoPlaceHolder="Digite aqui a rua de sua residência"/>
                            <InputCadastro label= "Cidade:" tamanhoInput="75%" textoPlaceHolder="Digite aqui a cidade de sua residência"/>
                            <InputCadastro label= "Complemento:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o complemento"/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/candidato" pagDesejada2="/candidatoQuestionario"/>
                    </div>
                </div>
            </div>
        </>
    );
}