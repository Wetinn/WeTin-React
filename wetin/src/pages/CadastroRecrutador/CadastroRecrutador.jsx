import styles from "./CadastroRecrutador.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../components/NavegadorCadastro/NavegadorCadastro"
import InputCadastro from '../../components/inputCadastro/InputCadastro'
import BotaoCadastro from "../../components/botaoCadastro/BotaoCadastro";

export default function CadastroRecrutador() {
    
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento" bolinha1="/recrutador" bolinha2="/recrutadorEndereco" bolinha3="/recutadorPagamento" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Preencha os campos abaixo para efetuar o seu cadastro</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <InputCadastro label="Nome da empresa:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o nome da empresa"/>
                            <InputCadastro label= "CNPJ:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o CNPJ da empresa"/>
                            <InputCadastro label="E-mail:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o e-mail da empresa"/>
                            <InputCadastro label= "Telefone:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o telefone da empresa"/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/cadastro" pagDesejada2="/recrutadorEndereco"/>
                    </div>
                </div>
            </div>
        </>
    );
}