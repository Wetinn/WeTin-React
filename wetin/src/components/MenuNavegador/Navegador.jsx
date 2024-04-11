import IconNavegacao from "./IconNavegacao";
import IconHome from "../../utils/assets/iconHome.svg";
import IconSolucao from "../../utils/assets/iconSolucao.svg";
import IconBeneficio from "../../utils/assets/iconBeneficio.svg";
import IconSobreNos from "../../utils/assets/iconSobreNos.svg";
import IconDepoimentos from "../../utils/assets/iconDepoimentos.svg";

import styles from "./MenuNavegacao.module.css"

export default function Navegador(props) {


    return (
        <div className={styles["container_menu"]}>
            <div className={styles["menu"]}>
                <IconNavegacao cor="#025373" icon={IconHome} descricao = "Home"/>
                <IconNavegacao cor="#F2B705" icon={IconSolucao} descricao = "Solução"/>
                <IconNavegacao cor="#F2B705" icon={IconBeneficio} descricao = "Benefícios"/>
                <IconNavegacao cor="#F2B705" icon={IconSobreNos} descricao = "Sobre nós"/>
                <IconNavegacao cor="#F2B705" icon={IconDepoimentos} descricao = "Depoimentos"/>
            </div>
        </div>

    );
}