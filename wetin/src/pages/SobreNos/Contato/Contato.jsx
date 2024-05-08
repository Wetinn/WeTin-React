import styles from "./Contato.module.css";
import IconSeta from "../../../utils/assets/iconSetaCima.png";
import Navegador from "../../../components/MenuNavegador/Navegador";
import { useNavigate } from "react-router-dom";
import ImgContato from "../../../utils/assets/fotoContato.png";

export default function Contato() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <div className={styles["container-header"]}>
                    <div className={styles["header"]}>
                        <button className={styles["btTopo"]} onClick={() => navigate("/sobreNos")}>Ir para o topo</button>
                        <div className={styles["div_seta"]}>
                            <img src={IconSeta} alt="" onClick={() => navigate("/valores")} />
                        </div>
                    </div>
                </div>

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]} onClick={() => navigate("/sobreNos")}>

                        </div>
                        <div className={styles["pag2"]} onClick={() => navigate("/valores")}>

                        </div>
                        <div className={styles["pag3"]} >

                        </div>
                    </div>


                    <div className={styles["containerContato"]}>
                        <div className={styles["caixaContato"]}>
                            <div className={styles["informacoes"]}>
                                <div className={styles["tituloContato"]}>
                                    <span>
                                        Contato
                                    </span>
                                </div>

                                <div className={styles["horarios"]}>
                                    <span className={styles["negrito"]}>
                                        Horários de funcionamento
                                    </span>

                                    <span>
                                        Segunda a Sexta-feira: 9h às 18h
                                    </span>
                                    <span>
                                        Sábado e Domindo: Fechado
                                    </span>
                                </div>

                                <div className={styles["informacoesContato"]}>
                                    <div className={styles["email"]}>
                                        <span className={styles["negrito"]}>
                                            E-mail:
                                        </span>

                                        <span>
                                            wetinCompany@hotmail.com
                                        </span>
                                    </div>
                                    <div className={styles["telefone"]}>
                                        <span className={styles["negrito"]}>
                                            Telefone:
                                        </span>

                                        <span>
                                            (00) 1234-5678
                                        </span>
                                    </div>
                                </div>

                                <div className={styles["endereco"]}>
                                    <span className={styles["negrito"]}>
                                        Endereço
                                    </span>
                                    <span>
                                        Rua Exemplo,123
                                    </span>
                                    <span>
                                        Cidade Exemplo, Estado X
                                    </span>
                                    <span>
                                        CEP: 12345-678
                                    </span>
                                </div>
                            </div>

                            <div className={styles["imagemContato"]}>
                                <img src={ImgContato} alt="" />
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