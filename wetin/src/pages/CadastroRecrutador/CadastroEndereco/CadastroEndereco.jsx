import styles from './CadastroEndereco.module.css';
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../api";

export default function CadastroEndereco() {

    const navigate = useNavigate();
    const dadosArmazenados = JSON.parse(sessionStorage.getItem("editado"));

    useEffect(() => {
        if (dadosArmazenados) {
            setNome(dadosArmazenados.nome);
            setCnpj(dadosArmazenados.cnpj);
            setEmail(dadosArmazenados.email);
            setTelefone(dadosArmazenados.telefone);
        }
    }, [dadosArmazenados]);

    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");

    const handleSave = () => {
        const dadosEndereco = {
            cep,
            cidade,
            bairro,
            rua
        };

        const dadosComEndereco = { ...dadosArmazenados, ...dadosEndereco };


        api.put(`/recrutador/{idRecrutador}`, dadosComEndereco).then(() => {
            toast.success("Cadastrado com sucesso!");
            sessionStorage.setItem("editadoEndereco", JSON.stringify(dadosComEndereco));
            navigate("/recrutadorEndereco");
        }).catch(() => {
            toast.error("Ocorreu um erro ao atualizr os dados de endereco, por favor, tente novamente.");
        })
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const handleBack = () => {
        navigate("/recrutador");
    };


    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Para podermos fornecer os melhores candidatos para sua empresa, precisamos saber o endereço dela</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">CEP: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite aqui o CEP da empresa" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Rua: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite aqui a rua da empresa" value={rua} onChange={(e) => handleInputChange(e, setRua)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Bairro: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite aqui o bairro da empresa" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Cidade: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite aqui a cidade da empresa" value={cidade} onChange={(e) => handleInputChange(e, setCidade)} />
                                </div>
                            </form>
                        </div>
                        <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}