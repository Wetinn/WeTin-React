import iconOlho from "../../utils/assets/iconOlho.png";
import styles from "./Input.module.css";
import { useNavigate } from "react-router-dom";


export default function InputSenha(props) {

    const navigate = useNavigate();

    const mostrarSenha = () => {
        const senhaInput = document.getElementById('inputLoginSenha');

        if (senhaInput.type === "password") {
            senhaInput.type = "text";
        } else {
            senhaInput.type = "password";
        }
    };

    return (
        <>
            <div className={styles["inputSenha"]}>
                <label htmlFor="inputLoginSenha">{props.textoLabel}</label>
                <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} />
                <img src={iconOlho} alt="Mostrar senha" onClick={mostrarSenha} />
                {
                    props.esqueciSenha ?
                        <div className={styles["msgEsquecerSenha"]}>
                            <span onClick={() => navigate("/recuperarSenha")}>
                                <u>Esqueci minha senha</u>
                            </span>
                        </div>
                        :
                        <div style={{height: "3vh"}}></div>
                }
            </div>
        </>
    );
}