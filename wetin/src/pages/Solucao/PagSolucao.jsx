import styles from "./Solucao.module.css";
import ImagemSolucao from "../../utils/assets/imgSolucao.png";
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header"


export default function solucao() {
    return (
        <>
            <Header/>
            <div className={styles["container_solucao"]}>
                <div className={styles["solucao"]}>
                    <div className={styles["texto_solucao"]}>
                        <span className={styles["titulo_solucao"]}>
                            Nossa Plataforma
                        </span>
                        <span className={styles["explicacao_solucao"]}>
                            Nossa plataforma é feita para conectar recrutadores com pessoas que têm Síndrome de Down e precisam de um
                            trabalho, oferecendo suporte na publicação de vagas, visualização dos candidatos, na retirada insights através
                            das métricas de quantidade de visualizações e captações nas vagas
                            <span>No lado dos candidatos é possível cadastrar seu perfil, expor seus talentos únicos, seus trabalhos passados,
                                seus interesses, se candidatar para vagas e muito mais!
                            </span>

                            A utilização do serviço dos candidatos é gratuita. Para usar as funcionalidades dos
                            <b >
                                recrutadores é necessário
                                pagar uma mensalidade de R$50,00 reais
                            </b>
                        </span>
                    </div>
                    <div className={styles["imgs"]}>
                        <img src={ImagemSolucao} alt="" className={styles["imgSolucao"]} />
                    </div>
                </div>
            </div>

            <Navegador/>

        </>
    );
}