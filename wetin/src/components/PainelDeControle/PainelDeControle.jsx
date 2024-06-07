import styles from "./PainelDeControle.module.css"
import ButtonFilled from "../../components/Buttons/ButtonFilled/ButtonFilled"
import ButtonOutline from "../../components/Buttons/ButtonOutline/ButtonOutline"
import { useNavigate } from "react-router-dom";

export default function PainelDeControle() {

    const navigate = useNavigate();

    const sla = () => {
        console.log("Button clicked!");
    }

    return(
        <>
            <div className={styles["painel-de-controle"]}>
                <h2>Painel de Controle</h2>
                <ButtonFilled texto="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Editar Perfil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" path="/dashboard/editarEmpresa" navigate={navigate} onClick={sla}/>
                <ButtonOutline texto="Vagas Publicadas" path="/dashboard/vagas-publicadas" navigate={navigate} onClick={sla}/>
            </div>
        </>
    )
}