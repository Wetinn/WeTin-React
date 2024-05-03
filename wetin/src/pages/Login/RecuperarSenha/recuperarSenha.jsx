import styles from "./recuperarSenha.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import BlocoRecuperar from "../../../components/BlocoRecuperar/blocoRecuperar";

export default function recuperarSenha() {
    
    return (
        <>

            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} textoBotao1={"Ir para página incial"} pagDesejada={"/"}/>
                <BlocoRecuperar textoTitulo={"Recuperar senha"} descricao={"Digite o seu e-mail para te enviarmos o passo a passo para você recuperar a sua senha"} temInput textoBotao={"Enviar e-mail de recuperação"} pagDesejada="/estamosQuaseLa"/>
            </div>

        </>
    );
}