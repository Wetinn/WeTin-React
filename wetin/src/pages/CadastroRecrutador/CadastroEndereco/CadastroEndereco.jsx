import styles from './CadastroEndereco.module.css';
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import InputCadastro from '../../../components/inputCadastro/InputCadastro'
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";

export default function CadastroEndereco() {
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento"/>

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Para podermos fornecer os melhores candidatos para sua empresa, precisamos saber o endereço dela</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <InputCadastro label="CEP:" tamanhoInput="35%" textoPlaceHolder="Digite aqui o CEP da empresa"/>
                            <InputCadastro label="Rua:" tamanhoInput="75%" textoPlaceHolder="Digite aqui a rua da empresa"/>
                            <InputCadastro label="Bairro:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o bairro da empresa"/>
                            <InputCadastro label="Cidade:" tamanhoInput="75%" textoPlaceHolder="Digite aqui a cidade da empresa"/>
                            <InputCadastro label="Complemento:" tamanhoInput="75%" textoPlaceHolder="Digite aqui o complemento da empresa"/>
                        </div>
                        <BotaoCadastro textoBt2 = "Próximo" pagDesejada1="/recrutador" pagDesejada2="/recrutadorPagamento" />
                    </div>
                </div>

            </div>
        </>
    );
}