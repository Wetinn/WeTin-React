import styles from "./SobreNos.module.css";
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import IconeSeta from "../../utils/assets/iconSeta.png";
import ImgSobre from "../../utils/assets/imagemSobre.png";


import { useNavigate } from "react-router-dom";

export default function SobreNos() {
    const navigate = useNavigate();
    return (
        <>

            <div className={styles["fundoPag"]}>

                <Header textoBotao1={"Entrar"} textoBotao2={"Se Cadastrar"} Logo={Logo} pagDesejada="/login" pagDesejada2="/cadastro" doisBotoes />

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]}>

                        </div>
                        <div className={styles["pag2"]} onClick={() => navigate("/valores")}>

                        </div>
                        <div className={styles["pag3"]} onClick={() => navigate("/contato")}>

                        </div>
                    </div>

                    <div className={styles["container_sobre"]}>
                        <div className={styles["sobre"]}>
                            <div className={styles["caixa_sobre"]}>
                                <div className={styles["parte_imagem"]}>
                                    <img src={ImgSobre} alt="" />
                                </div>
                                <div className={styles["parte_escrita"]}>
                                    <div className={styles["div_titulo"]}>
                                        <span className={styles["titulo_sobre"]}>
                                            O que é a WeTin
                                        </span>
                                    </div>

                                    <div className={styles["escrita"]}>
                                        <span>
                                            É uma frente de combate contra a segregação e o preconceito. Somos apaixonados pela diversificação e pela ideia de um mundo mais justo e plural.
                                        </span>

                                        <span>
                                            Nossa missão é simples, clara e objetiva: promover a igualdade de oportunidades e a inclusão no mercado de trabalho de todo tipo de pessoa, independente da sua origem, capacidade, gênero, preferência ou identidade
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles["caixa_seta"]}>
                                <img src={IconeSeta} alt="" onClick={() => navigate("/valores")} />
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