import styles from "./Valores.module.css";
import IconSeta from "../../../utils/assets/iconSetaCima.png";
import IconSetaBaixo from "../../../utils/assets/iconSeta.png";
import IconDiversidade from "../../../utils/assets/iconDiversidade.png";
import IconInclusao from "../../../utils/assets/iconInclusao.png";
import IconInovacao from "../../../utils/assets/iconInovacao.png";
import Navegador from "../../../components/MenuNavegador/Navegador";
import CardValor from "../../../components/CardValor/CardValor";
import { useNavigate } from "react-router-dom";

export default function Valores() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <div className={styles["container-header"]}>
                    <div className={styles["header"]}>
                        <button className={styles["btTopo"]} onClick={() => navigate("/sobreNos")}>Ir para o topo</button>

                        <div className={styles["div_seta"]}>
                            <img src={IconSeta} alt="" onClick={() => navigate("/sobreNos")} className={styles["setaHeader"]} />
                        </div>

                        <span>Valores</span>
                    </div>
                </div>

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]} onClick={() => navigate("/sobreNos")}>

                        </div>
                        <div className={styles["pag2"]}>

                        </div>
                        <div className={styles["pag3"]} onClick={() => navigate("/contato")}>

                        </div>
                    </div>

                    <div className={styles["container_valores"]}>
                        <div className={styles["valores"]}>
                            <div className={styles["caixa_cards"]}>
                                <CardValor imagem_valor={IconDiversidade} titulo_valor="Diversidade" descricao_valor="Nós abraçamos a diversidade em todas as suas formas. Acreditamos que a força de uma equipe reside em suas diferentes origens, perspectivas e experiências. " />

                                <CardValor imagem_valor={IconInclusao} titulo_valor="Inclusão" descricao_valor="A inclusão está no cerne de tudo o que fazemos. Trabalhamos para criar um ambiente onde todos se sintam valorizados, respeitados e capacitados a contribuir plenamente." />

                                <CardValor imagem_valor={IconInovacao} titulo_valor="Inovação" descricao_valor="Somos impulsionados pela inovação em tudo o que fazemos. Buscamos constantemente maneiras de promover a diversidade e a inclusão, seja através de abordagens criativas ou parcerias estratégicas " />

                            </div>
                            <div className={styles["caixa_seta"]}>
                                <img src={IconSetaBaixo} alt="" onClick={() => navigate("/contato")}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles["Navegador"]}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#F2B705" cor3="#F2B705" cor4="#025373" cor5="#F2B705" />
                </div>
            </div>
        </>
    );
}