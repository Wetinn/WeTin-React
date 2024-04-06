import IconNavegacao from "./IconNavegacao";
import IconHome from "../assets/imgs/iconHome.svg";
import IconSolucao from "../assets/imgs/iconSolucao.svg";
import IconBeneficio from "../assets/imgs/iconBeneficio.svg";
import IconSobreNos from "../assets/imgs/iconSobreNos.svg";
import IconDepoimentos from "../assets/imgs/iconDepoimentos.svg";


export default function Navegador(props) {


    return (
        <div class="container_menu">
            <div class="menu">
                <IconNavegacao cor="#025373" icon={IconHome} descricao = "Home"/>
                <IconNavegacao cor="#F2B705" icon={IconSolucao} descricao = "Solução"/>
                <IconNavegacao cor="#F2B705" icon={IconBeneficio} descricao = "Benefícios"/>
                <IconNavegacao cor="#F2B705" icon={IconSobreNos} descricao = "Sobre nós"/>
                <IconNavegacao cor="#F2B705" icon={IconDepoimentos} descricao = "Depoimentos"/>
            </div>
        </div>

    );
}