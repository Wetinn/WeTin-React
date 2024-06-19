import styles from './criarSenha.module.css';
import Header from '../../../components/Header/Header';
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import iconOlho from "../../../utils/assets/iconOlho.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CriarSenha() {
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const atualizarSenha = async () => {
        const emailFromStorage = sessionStorage.getItem("email");
        if (!emailFromStorage) {
            toast.error("Email não encontrado no armazenamento de sessão");
            return;
        }

        if (senha !== confirmarSenha) {
            toast.error("As senhas não coincidem");
            return;
        }

        setLoading(true);
        try {
            const encodedEmail = encodeURIComponent(emailFromStorage);
            const url = `/recuperacoes/${encodedEmail}`;
            console.log(`Sending request to URL: ${url}`);

            const response = await axios.put(url, senha);
            console.log('Server response:', response.data);

            toast.success("Senha atualizada com sucesso!");
            sessionStorage.removeItem("email");
            setLoading(false);
            navigate("/login");
        } catch (err) {
            console.error('Error during request:', err.response ? err.response.data : err);
            toast.error("Não foi possível atualizar a senha");
            setLoading(false);
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

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
            {loading && <Loading />}
            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} />
                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Criar uma nova senha
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Para trocar a sua senha precisamos que você informe uma nova para substituir ela!
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>
                            <div className={styles["inputSenha"]}>
                                <label htmlFor="inputLoginSenha">Nova Senha:</label>
                                <div className={styles["input"]}>
                                    <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} value={senha} onChange={(e) => handleInputChange(e, setSenha)} />
                                    <div className={styles["divImg"]}>
                                        <img src={iconOlho} alt="Mostrar senha" onClick={mostrarSenha} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles["inputSenha"]}>
                                <label htmlFor="inputLoginSenha">Confirmar Nova Senha:</label>
                                <div className={styles["input"]}>
                                    <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} value={confirmarSenha} onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                                    <div className={styles["divImg"]}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btLogin}>
                            <button onClick={atualizarSenha}>
                                Trocar Senha
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}