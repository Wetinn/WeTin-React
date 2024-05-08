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
                <IconNavegacao pag="/" cor={props.cor1} icon={IconHome} descricao = "Home" fonte={props.fonte}/>
                <IconNavegacao pag="/solucao" cor={props.cor2} icon={IconSolucao} descricao = "Solução" fonte={props.fonte}/>
                <IconNavegacao pag="/beneficios" cor={props.cor3} icon={IconBeneficio} descricao = "Benefícios" fonte={props.fonte}/>
                <IconNavegacao pag="/sobreNos" cor={props.cor4} icon={IconSobreNos} descricao = "Sobre nós" fonte={props.fonte}/>
                <IconNavegacao pag="/depoimentos" cor={props.cor5} icon={IconDepoimentos} descricao = "Depoimentos" fonte={props.fonte}/>
            </div>
        </div>

    );
}