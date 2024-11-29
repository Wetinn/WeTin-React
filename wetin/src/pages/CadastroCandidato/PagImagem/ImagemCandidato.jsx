import styles from "./ImagemCandidato.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import { useNavigate } from "react-router-dom";
import IconImgAnexo from "../../../utils/assets/iconImagemAnexa.svg"
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


export default function CadastroImagem() {

    const navigate = useNavigate();

    const [fileLoaded, setFileLoaded] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [fileUrl, setFileUrl] = useState(null);
    const fileInputRef = useRef(null);

   

    const handleBack = () => {
        navigate("/descricaoCandidato");
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFileLoaded(true);
                uploadFile(file);
            }
        }
    };

    const uploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
    
            const response = await axios.post('/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            const fileUrl = response.data; // Supondo que o endpoint retorna a URL do arquivo
            setFileUrl(fileUrl.url); // Atualiza o estado com a URL da imagem
    
            // Debugging: Verifica se a URL da imagem está sendo corretamente definida
            console.log('File URL:', fileUrl);
    
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleSave = () => {
        const fotoCandidato = {
            imagem: fileUrl // Certifique-se de que fileUrl contém a URL correta da imagem
        };
        console.log("to mandando", fotoCandidato)
        sessionStorage.setItem("fotoCandidato", JSON.stringify(fotoCandidato));
        navigate("/candidatoQuestionario");
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFileLoaded(true);
                uploadFile(file);
            }
        }
    };

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador texto2="#F2F2F2" ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Pagamento" bolinha1="#F2B705" bolinha2="#025373" bolinha3="#F2B705" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Anexe uma imagem para o seu perfi</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form>
                                <div className={styles["infosEmpresa"]}>
                                    <div className={styles["alinhamento"]}>
                                        <span className={styles["tiltAn"]}>
                                            Anexe uma imagem:
                                        </span>
                                        <div className={styles["caixaImagem"]}>

                                            <div className={styles["iconeImg"]}>
                                                <img src={IconImgAnexo} alt="" />
                                            </div>

                                            <div className={styles["arrastarArquivo"]}>
                                                <div
                                                    onDragEnter={handleDragEnter}
                                                    onDragLeave={handleDragLeave}
                                                    onDragOver={handleDragOver}
                                                    onDrop={handleDrop}
                                                    onClick={handleClick}
                                                    style={{
                                                        border: dragging ? '2px dashed #025373' : '2px dashed #025373',
                                                        width: "90%",
                                                        borderRadius: "5px",
                                                        height: "16vh",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        fontSize: "0.9rem",
                                                        paddingLeft: "10px",
                                                        cursor: "pointer"
                                                    }}
                                                    className={styles['arrasteAqui']}
                                                >
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        style={{ display: 'none' }}
                                                        onChange={handleFileChange}
                                                    />
                                                    {
                                                        fileLoaded ? (
                                                            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
                                                        ) : (
                                                            <p>Arraste e solte uma imagem aqui, ou clique para selecionar</p>
                                                        )
                                                    }
                                                </div >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div>
                        {/* <BotaoCadastro textoBt2="Próximo" pagDesejada1="/recrutador" pagDesejada2="/recrutadorPagamento" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}