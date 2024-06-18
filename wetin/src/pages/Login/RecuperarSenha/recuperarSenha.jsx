import styles from "./recuperarSenha.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RecuperarSenha() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({
        email: ""
    });

    const validarInputs = () => {
        var naoTemErro = true;
        var errors = {
            email: ""
        };

        if (!email) {
            errors.email = "O email é obrigatório para enviar o código";
            naoTemErro = false;
        }

        setErrorMessages(errors);
        return naoTemErro;
    }

    const enviarEmail = async () => {
        if (validarInputs()) {
            setLoading(true);
            try {
                const encodedEmail = encodeURIComponent(email);
                const url = `/recuperacoes/${encodedEmail}`;
                console.log(`Sending request to URL: ${url}`);
                
                await axios.post(url);
                
                toast.success("Código enviado com sucesso");
                sessionStorage.setItem("email", email);
                setLoading(false);
                navigate("/estamosQuaseLa");
            } catch (err) {
                console.error('Error during request:', err);
                toast.error("Não foi possível enviar o código");
                setLoading(false);
            }
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    return (
        <>
            {loading && <Loading />}
            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} textoBotao1={"Ir para Página Inicial"} />

                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Recuperar senha
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Digite o seu e-mail para te enviarmos o passo a passo para você recuperar a sua senha
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>

                            <div id="teste" style={{ display: "flex", height: "12vh", width: "100%", alignItems: "center" }}>
                                <div style={{ with: "100%", height: "12vh", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <label htmlFor="inputLoginEmail" className={styles["labelCodigo"]}>E-Mail:</label>
                                    {errorMessages.email && <span className={styles["error"]}>* {errorMessages.email}</span>}
                                    <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui o email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                                </div>
                            </div>
                            <div className={styles.btLogin}>
                                <button onClick={enviarEmail}>
                                    Enviar e-mail de recuperação
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}