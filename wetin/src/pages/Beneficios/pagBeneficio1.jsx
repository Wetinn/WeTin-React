import styles from "./pagBeneficio1.module.css";
import Navegador from "../../components/MenuNavegador/Navegador";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import { useNavigate } from "react-router-dom";
import IconeSeta from "../../utils/assets/iconSeta.png";
import CardBeneficio from "../../components/CardsBeneficios/CardBeneficio";
import IconCriatividade from "../../utils/assets/IconCriatividade.png";
import IconProdutivo from "../../utils/assets/trabalhoProdutivo.png";
import IconHabilidades from "../../utils/assets/habilidades.png";
import IconFoco from "../../utils/assets/foco.png";

export default function PagBeneficio1() {
    const navigate = useNavigate();
    return (

        <>
            <div className={styles["fundoPag"]}>
            <Header textoBotao1={"Entrar"} textoBotao2={"Se Cadastrar"} Logo={Logo} pagDesejada="/login" pagDesejada2="/cadastro" doisBotoes />

                <div className={styles["conteudo"]}>
                    <div className={styles["div_navegacao_bolinha"]}>
                        <div className={styles["pag1"]}>

                        </div>
                        <div className={styles["pag2"]} onClick={() => navigate("/segundaPartebeneficios")}>

                        </div>
                    </div>

                    <div className={styles["container_beneficios"]}>
                        <div className={styles["beneficios"]}>
                            <div className={styles["caixa_beneficio"]}>
                                <div className={styles["informacoes_beneficio"]}>
                                    <div className={styles["div_titulo"]}>
                                        <span>
                                        Benefícios para a sua empresa
                                        </span>
                                    </div>
                                    <div className={styles["cards_beneficio"]}>
                                        <CardBeneficio imagem_card={IconCriatividade} titulo_card="Criatividade ao extremo" conteudo_card="Os pessoas com Síndrome de Down são extremamente criativas, são os candidatos ideais para vagas que queiram uma renovação criativa na equipe"/>
                                        <CardBeneficio imagem_card={IconProdutivo} titulo_card="Ambiente de Trabalho Positivo" conteudo_card="Se você busca aumentar a motivação da equipe, eles são o tiro certo para você. Além disso, eles transformam e ressignificar o ecossistema da empresa"/>
                                        <CardBeneficio imagem_card={IconHabilidades} titulo_card="Habilidades Sociais e Empáticas" conteudo_card="Os trabalhadores ideais para se trabalhar com o público! A paixão e a empatia que os Síndrome de Down demonstram é incomparável"/>
                                        <CardBeneficio imagem_card={IconFoco} titulo_card="Foco no Trabalho em Equipe" conteudo_card="Promover a cultura da inclusão não só transforma a vida das pessoas, mas também promove o trabalho em equipe, incentivando a colaboração e o apoio mútuo entre todos"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["caixa_seta"]}>
                                <img src={IconeSeta} alt="" onClick={() => navigate("/segundaPartebeneficios")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["Navegador"]}>
                    <Navegador fonte="black" cor1="#F2B705" cor2="#F2B705" cor3="#025373" cor4="#F2B705" cor5="#F2B705" />
                </div>
            </div>
        </>

    );
}