import styles from "./pagBeneficios.module.css";
import IconSeta from "../../utils/assets/iconSetaCima.png";
import FotoBeneficio from "../../utils/assets/fotoBeneficios.png"
import Navegador from "../../components/MenuNavegador/Navegador";
import { useNavigate } from "react-router-dom";

export default function PagBeneficios() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <div className={styles["container-header"]}>
                    <div className={styles["header"]}>
                        <button className={styles["btTopo"]} onClick={() => navigate("/beneficios")}>Ir para o topo</button>
                        <div className={styles["div_seta"]}>
                            <img src={IconSeta} alt="" onClick={() => navigate("/beneficios")}/>
                        </div>
                    </div>
                </div>

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]} onClick={() => navigate("/beneficios")}>

                        </div>
                        <div className={styles["pag2"]}>

                        </div>
                    </div>

                    <div className={styles["container_beneficios"]}>
                        <div className={styles["beneficios"]}>

                            <img src={FotoBeneficio} alt="" />
                            <div className={styles["textos_beneficios"]}>
                                <span className={styles["titulo_beneficios"]}>
                                    Benefícios para o síndrome de Down
                                </span>

                                <ul className={styles["lista_beneficios"]}>
                                    <li>A tão sonhada autonomia financeira é um dos maiores benefícios da inclusão no mercado de trabalho.</li>
                                    <li>Nada como a sensação de gratificação ao entregar uma tarefa bem feita. Isso aumenta a confiança e a autoestima de qualquer um!</li>
                                    <li>O emprego não só é uma fonte de renda, ele nos dá um propósito, faz a gente se sentir parte de algo muito maior</li>
                                    <li>Nós construímos conexões e amizades nas mais diferentes situações, isso não é diferente no mercado de trabalho</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["Navegador"]}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#F2B705" cor3="#025373" cor4="#F2B705" cor5="#F2B705"/>
                </div>


            </div>
        </>
    );
}