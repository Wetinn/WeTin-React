import IconNavegacao from "./SecaoCadastro";
import IconHome from "../../utils/assets/iconHome.svg";
import IconSolucao from "../../utils/assets/iconSolucao.svg";
import IconBeneficio from "../../utils/assets/iconBeneficio.svg";
import IconSobreNos from "../../utils/assets/iconSobreNos.svg";
import IconDepoimentos from "../../utils/assets/iconDepoimentos.svg";

import styles from "./MenuCadastro.module.css"

export default function Navegador(props) {


    return (
        <div className={styles["container_menu"]}>
            <div className={styles["menu"]}>
                <IconNavegacao cor={props.ativa}  descricao = "Criando perfil" n="1" color={props.textoAtivo}/>
                <IconNavegacao cor="#F2B705"  descricao = "Endereço" n="2" color=""/>
                <IconNavegacao cor="#F2B705"  descricao = "Pagamento" n="3" color=""/>
            </div>
        </div>

    );
}