import styles from "./Depoimento.module.css"
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import CardDepoimento from "../../components/CardDepoimento/CardDepoimento";
import TesteDepoimento from "../../utils/assets/fotoCardDepoimento.png"

export default function Depoimento() {
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Entrar"} textoBotao2={"Se Cadastrar"} Logo={Logo} pagDesejada="/login" pagDesejada2="/cadastro" doisBotoes />

                <div className={styles["containerDepoimentos"]}>
                    <div className={styles["depoimentos"]}>
                        <div className={styles["titulo"]}>
                            <span>
                                Depoimentos
                            </span>

                        </div>

                        <div className={styles["caixaCards"]}>
                            <CardDepoimento imgDepoimento={TesteDepoimento} tituloCard="Marcos, candidato" depoimento="Nunca pensei que conseguiria encontrar uma oportunidade de emprego tão perfeita para mim. A WeTin não apenas me conectou com empregadores que valorizam minhas habilidades, mas também me deu a confiança para mostrar o melhor de mim durante o processo de recrutamento. Estou imensamente grato por esta plataforma incrível!" />
                        </div>
                    </div>
                </div>

                <div className={styles["Navegador"]}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#F2B705" cor3="#F2B705" cor4="#F2B705" cor5="#025373" />
                </div>
            </div>
        </>
    );
}