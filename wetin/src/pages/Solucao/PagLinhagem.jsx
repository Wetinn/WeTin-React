import styles from "./PagLinhagem.module.css";
import IconSeta from "../../utils/assets/iconSetaCima.png";
import FotoLinhagem from "../../utils/assets/linhagem.png"
import Navegador from "../../components/MenuNavegador/Navegador";
import { useNavigate } from "react-router-dom";

export default function PagLinhagem() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <div className={styles["container-header"]}>
                    <div className={styles["header"]}>
                        <button className={styles["btTopo"]} onClick={() => navigate("/solucao")}>Ir para o topo</button>
                        <div className={styles["div_seta"]}>
                            <img src={IconSeta} alt="" onClick={() => navigate("/solucao")} />
                        </div>
                    </div>
                </div>

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]} onClick={() => navigate("/solucao")}>

                        </div>
                        <div className={styles["pag2"]}>

                        </div>
                    </div>

                    <div className={styles["container_linhagem"]}>
                        <div className={styles["linhaTempo"]}>
                            <img src={FotoLinhagem} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles["Navegador"]}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#025373" cor3="#F2B705" cor4="#F2B705" cor5="#F2B705" />
                </div>


            </div>
        </>
    );
}