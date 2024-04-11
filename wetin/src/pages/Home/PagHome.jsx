import styles from "./Home.module.css"
import Header from '../../components/Header/Header';
import Navegador from "../../components/MenuNavegador/Navegador";


export default function App() {
    return (
        <>
            <Header  />
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
                        <button className={styles["btCad"]}>Se Cadastrar</button>
                        <button className={styles["btSm"]}>Saiba Mais</button>
                    </div>
                </div>
            </div>
            <Navegador/>
        </>

    );
}