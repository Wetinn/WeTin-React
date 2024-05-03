import styles from "./Home.module.css"
import Header from '../../components/Header/Header';
import Navegador from "../../components/MenuNavegador/Navegador";
import Logo from "../../utils/assets/imgLogo.png";
import { useNavigate } from "react-router-dom";


export default function App() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} textoBotao1={"Entrar"} pagDesejada="/login" />
                <div className={styles["container-banner"]}>
                    <div className={styles["banner"]}>
                        <div className={styles["textos_iniciais"]}>
                            <span className={styles["titulo"]}>
                                Conectando Oportunidades, Transformando Vidas
                            </span>
                            <span className={styles["complemento"]}>
                                Junte-se a nós na luta pela inclusão de pessoas com Síndrome de Down no mercado de trabalho, seja você um recrutador ou um talento único com Síndrome de Down, nossa plataforma está pronta para unir sonhos e oportunidades!
                            </span>

                        </div>
                        <div className={styles["botoes_banner"]}>
                            <button className={styles["btCad"]} onClick={() => navigate("/cadastro")}>Se Cadastrar</button>
                            <button className={styles["btSm"]} onClick={() => navigate("/solucao")}>Saiba Mais</button>
                        </div>
                    </div>
                </div>
                <div className={styles["Navegador"]}>
                    <Navegador  cor1="#025373" cor2="#F2B705" cor3="#F2B705" cor4="#F2B705" cor5="#F2B705"/>
                </div>
            </div>
        </>

    );
}