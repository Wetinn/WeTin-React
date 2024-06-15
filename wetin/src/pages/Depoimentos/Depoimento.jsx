import styles from "./Depoimento.module.css"
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import CardDepoimento from "../../components/CardDepoimento/CardDepoimento";
import FotoDepoimento from "../../utils/assets/fotoCardDepoimento.png"
import FotoDepoimento2 from "../../utils/assets/depoimento2.png"
import FotoDepoimento3 from "../../utils/assets/depoimento3.png"

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
                            <CardDepoimento imgDepoimento={FotoDepoimento} tituloCard="Marcos, candidato" depoimento="Nunca pensei que conseguiria encontrar uma oportunidade de emprego tão perfeita para mim. A WeTin não apenas me conectou com empregadores que valorizam minhas habilidades, mas também me deu a confiança para mostrar o melhor de mim durante o processo de recrutamento. Estou imensamente grato por esta plataforma incrível!" />
                            <CardDepoimento imgDepoimento={FotoDepoimento2} tituloCard="Ana, Recrutadora" depoimento="Estou absolutamente impressionada com a WeTin! Como recrutadora, sempre busco maneiras de diversificar minha equipe e promover inclusão. Esta plataforma me deu a oportunidade de encontrar talentos incríveis com síndrome de Down que estão prontos para contribuir de forma significativa para nossa empresa. Recomendo para todos os meus colegas!" />
                            <CardDepoimento imgDepoimento={FotoDepoimento3} tituloCard="Mariana, Diretora de RH" depoimento="Como diretora de recursos humanos, estou sempre em busca de maneiras inovadoras de fortalecer nossa equipe e promover um ambiente de trabalho inclusivo. A WeTin tem sido uma descoberta incrível para nós. Não apenas nos conectou com candidatos talentosos com síndrome de Down, mas também nos proporcionou insights valiosos" />
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