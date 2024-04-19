import styles from "./SelecaoCadastro.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import iconCandidato from "../../utils/assets/iconCandidato.png"
import iconRecrutador from "../../utils/assets/iconRecrutador.png"
import { useNavigate } from "react-router-dom";


export default function SelecaoCadastro() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/"/>

                <div className={styles["containner"]}>
                    <div className={styles["blocoEscolha"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Para fazer o seu cadastro, primeiro precisamos saber quem você é
                            </span>
                        </div>
                        <div className={styles["selecao"]}>
                            <div className={styles["cadastroCandidato"]} onClick={() => navigate("/cadastro")}>
                                <img src={iconCandidato} alt="" />
                                <span>
                                    Sou um Candidato!
                                </span>
                            </div>
                            <div className={styles["cadastroRecrutador"]} onClick={() => navigate("/recrutador")}>
                                <img src={iconRecrutador} alt="" />
                                <span>
                                    Sou um Recrutador!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



