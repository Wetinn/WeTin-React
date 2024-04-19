import styles from "./CadastroRecrutador.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../components/NavegadorCadastro/NavegadorCadastro"
import { useNavigate } from "react-router-dom";

export default function CadastroRecrutador() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />

                <Navegador ativa="#025373" textoAtivo="#F2F2F2"/>
            </div>
        </>
    );
}