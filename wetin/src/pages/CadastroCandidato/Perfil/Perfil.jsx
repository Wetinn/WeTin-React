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
                            <span>Agora, precisamos de algumas informações suas para colocar no seu perfil</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <InputCadastro label="Nome Completo:" tamanhoInput="75%" textoPlaceHolder="Digite aqui seu nome"/>
                            <InputCadastro label="E-mail:" tamanhoInput="75%" textoPlaceHolder="Digite aqui seu e-mail"/>
                            <InputCadastro label= "Telefone:" tamanhoInput="75%" textoPlaceHolder="Digite aqui seu telefone"/>
                            <InputCadastro label= "CPF:" tamanhoInput="75%" textoPlaceHolder="Digite aqui seu CPF"/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/cadastro" pagDesejada2="/candidatoEndereco"/>
                    </div>
                </div>
            </div>
        </>
    );
}