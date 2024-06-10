import styles from "./Solucao.module.css";
import ImagemSolucao from "../../utils/assets/imgSolucao.png";
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import IconSeta from "../../utils/assets/iconSeta.png"
import { useNavigate } from "react-router-dom";

export default function Solucao() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Entrar"} textoBotao2={"Se Cadastrar"} Logo={Logo} pagDesejada="/login" pagDesejada2="/cadastro" doisBotoes />
                <div className={styles["container_solucao"]}>
                    <div className={styles["solucao"]}>

                        <div className={styles["navegacaoBolinha"]}>
                            <div className={styles["pag1"]}></div>
                            <div className={styles["pag2"]} onClick={() => navigate("/linhagem")}></div>
                        </div>

                        <div className={styles["conteudo"]}>

                            <div className={styles["texto_solucao"]}>
                                <span className={styles["titulo_solucao"]}>
                                    Nossa Plataforma
                                </span>
                                <span className={styles["explicacao_solucao"]}>
                                    Nossa plataforma é feita para conectar recrutadores com pessoas que têm Síndrome de Down e precisam de um
                                    trabalho, oferecendo suporte na publicação de vagas, visualização dos candidatos, na retirada insights através
                                    das métricas de quantidade de visualizações e captações nas vagas
                                </span>
                                <span className={styles["explicacao_solucao"]}>
                                    No lado dos candidatos é possível cadastrar seu perfil, expor seus talentos únicos, seus trabalhos passados,
                                    seus interesses, se candidatar para vagas e muito mais!
                                </span>
                                <span className={styles["explicacao_solucao"]}>
                                    A utilização do serviço dos candidatos é gratuita. Para usar as funcionalidades dos <b>recrutadores é necessário pagar uma mensalidade de R$50,00 reais</b>
                                </span>
                            </div>
                            <div className={styles["imgs"]}>
                                <img src={ImagemSolucao} alt="" className={styles["imgSolucao"]} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={IconSeta} alt="" style={{ cursor: "pointer" }} onClick={() => navigate("/linhagem")}/>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginLeft: "2.5%" }}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#025373" cor3="#F2B705" cor4="#F2B705" cor5="#F2B705" />
                </div>
            </div>


        </>
    );
}