import styles from "./Login.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import { toast } from 'react-toastify';
import iconOlho from "../../utils/assets/iconOlho.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



export default function Login() {
    const notify = () => {
        toast("Login ralizado com sucesso!");
      };

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    const verificarLogin = async () => {
        const usuario = {
            email,
            senha
        }

        try {
            const loginResponse = await axios.post('/api/auth/login', usuario);
            const token = loginResponse.data.token;

            sessionStorage.setItem('token', token);
            const descriptografando = await axios.get(`/api/auth/descriptografar/${token}`);
            const idEmpresaDescriptografado = descriptografando.data;
            sessionStorage.setItem('user', JSON.stringify(idEmpresaDescriptografado));
            notify();
            setTimeout(() => {
                navigate("/dashboard");
              }, 3000);
        } catch (err) {
            console.error(err);
            console.log(usuario);
            alert("deu ruim");
        }
    }

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
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />

                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Entrar
                            </span>
                        </div>

                        <div className={styles["blocoErro"]}>
                            <span>
                                Ops! O seu e-mail ou sua senha estão incorretos
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>
                            <div className={styles["inputEmail"]}>
                                <label htmlFor="inputLoginEmail">E-mail:</label>
                                <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui" value={email} onChange={(e) => handleInputChange(e, setEmail)} />

                            </div>

                            <div className={styles["inputSenha"]}>
                                <label htmlFor="inputLoginSenha">Senha</label>
                                <div className={styles["input"]}>
                                    <input id="inputLoginSenha" type="password" className={styles["inputLoginSenha"]} placeholder="Digite aqui" maxLength={12} value={senha} onChange={(e) => handleInputChange(e, setSenha)} />
                                    <div className={styles["divImg"]}>
                                        <img src={iconOlho} alt="Mostrar senha" onClick={mostrarSenha} />
                                    </div>
                                </div>
                                <div className={styles["msgEsquecerSenha"]}>
                                    <span onClick={() => navigate("/recuperarSenha")}>
                                        <u>Esqueci minha senha</u>
                                    </span>
                                </div>
                            </div>

                            {/* <BtLogin textoBotao="Entrar" onClick="verificarLogin"/> */}

                            <div className={styles["btLogin"]}>
                                <button onClick={verificarLogin}>
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}