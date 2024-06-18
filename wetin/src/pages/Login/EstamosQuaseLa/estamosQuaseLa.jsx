import styles from "./estamosQuaseLa.module.css"
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function EnviarCodigo() {

    const [codigo, setCodigo] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({
        codigo: ""
    });

    const validarInputs = () => {
        var naoTemErro = true;
        var errors = {
            codigo: ""
        };

        if (!codigo) {
            errors.codigo = "O código é obrigatório";
            naoTemErro = false;
        }

        setErrorMessages(errors);
        return naoTemErro;
    }

    const validarCodigo = async () => {
        const emailFromStorage = sessionStorage.getItem("email");
        if (!emailFromStorage) {
            toast.error("Email não encontrado no armazenamento de sessão");
            return;
        }

        if (validarInputs()) {
            setLoading(true);
            try {
                const encodedEmail = encodeURIComponent(emailFromStorage);
                const encodedCodigo = encodeURIComponent(codigo);
                const url = `http://localhost:3000/recuperacoes/${encodedCodigo}/${encodedEmail}`;
                console.log(`Sending request to URL: ${url}`);

                await axios.get(url);

                toast.success("Código validado com sucesso");
                setLoading(false);
                navigate("/criarSenha");
            } catch (err) {
                console.error('Error during request:', err.response ? err.response.data : err);
                toast.error("Não foi possível validar o código");
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
                                Enviamos um código de confirmação!
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Agora é só acessar o seu e-mail e entrar no link que enviamos para você e digitar o código de confirmação. Se você não achar ele na sua caixa de entrada, procure ele na sessão de Spam
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>

                            <div id="teste" style={{ display: "flex", height: "12vh", width: "100%", alignItems: "center" }}>
                                <div style={{ with: "100%", height: "12vh", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <label htmlFor="inputLoginEmail" className={styles["labelCodigo"]}>Código:</label>
                                    {errorMessages.codigo && <span className={styles["error"]}>* {errorMessages.codigo}</span>}
                                    <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui o código" value={codigo} onChange={(e) => handleInputChange(e, setCodigo)} />
                                </div>
                            </div>
                            <div className={styles.btLogin}>
                                <button onClick={validarCodigo}>
                                    Confirmar Código
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}