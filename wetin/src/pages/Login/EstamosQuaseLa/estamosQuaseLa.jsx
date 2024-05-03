import styles from "./estamosQuaseLa.module.css"
import BlocoRecuperar from "../../../components/BlocoRecuperar/blocoRecuperar"
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";


export default function criarSenha() {
    return(
        <>
        <div className={styles["fundoPag"]}>
            <Header Logo={Logo} textoBotao1={"Ir para Página Inicial"}/>
            <BlocoRecuperar textoTitulo="Estamos quase lá!" descricao="Agora é só acessar o seu e-mail e entrar no link que enviamos para você. Se você não achar ele na sua caixa de entrada, procure ele na sessão de Spam"  textoBotao="Beleza!" pagDesejada="/criarSenha"/>
        </div>
        </>
    );
}