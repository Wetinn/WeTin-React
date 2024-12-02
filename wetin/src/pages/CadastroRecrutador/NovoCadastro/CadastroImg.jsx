// import api from "../../api";
//import { toast } from "react-toastify";
import styles from "./CadastroImg.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import { useNavigate } from "react-router-dom";
import IconImgAnexo from "../../../utils/assets/iconImagemAnexa.svg"
// import DragAndDrop from "../../../components/BoxImagemCadastro/DragAndDrop";
import InputMask from 'react-input-mask';
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";


export default function CadastroRecrutador() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [descricao, setDescricao] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [cep, setCep] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    descricao: "",
    linkedin: "",
    cep: ""
  });
  const [fileLoaded, setFileLoaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const fileInputRef = useRef(null);

  const validarInputs = () => {
    let naoTemErro = true;
    const errors = {
      descricao: "",
      linkedin: "",
      cep: ""
    };

    if (!descricao) {
      errors.descricao = "Descrição é obrigatória";
      naoTemErro = false;
    }
    if (!linkedin) {
      errors.linkedin = "O link do Linkedin é obrigatório";
      naoTemErro = false;
    }
    if (!cep) {
      errors.cep = "CEP é obrigatório";
      naoTemErro = false;
    }
    setErrorMessages(errors);
    return naoTemErro;
  };

  const handleSave = async () => {
    setLoading(true);
    if (validarInputs()) {
      try {
        const responseCep = await handleCep();
        if (responseCep != null) {
          const continuacao = {
            linkedin,
            cep,
            descricao,
            imagem: fileUrl,
            tag: {
              tipo: "localidade",
              valor: responseCep.localidade
            }
          };
          console.log(continuacao);
          sessionStorage.setItem("continuacao", JSON.stringify(continuacao));
          navigate("/recrutadorPagamento");
        } else {
          toast.error("CEP inválido!");
        }
      } catch (error) {
        console.error("Erro inesperado:", error);
        toast.error("Ocorreu um erro inesperado.");
      } finally {
        setLoading(false);
      }
    }
  };
  

  const handleCep = async () => {
    try {
      const cepFormatado = cep.replace("-", "");
      const response = await axios.get(`https://viacep.com.br/ws/${cepFormatado}/json/`);
      const data = response.data;

      console.log(data)
      
      if (data.erro) {
        return null;
      }
      return data;
    } catch (err) {
      console.error("Erro na requisição do ViaCEP:", err);
      return null;
    }
  };
  

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleBack = () => {
    navigate("/recrutador");
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
      setFileUrl(fileUrl);
      const fotoRecrutador = {
        imagem: fileUrl.url // Certifique-se de que fileUrl contém a URL correta da imagem
    };
    console.log("to mandando", fotoRecrutador)
    sessionStorage.setItem("fotoRecrutador", JSON.stringify(fotoRecrutador))

      // Aqui você pode salvar a URL no estado ou fazer outra ação conforme necessário
      console.log('File URL:', fileUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
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
      {loading && <Loading />}
      <div className={styles["fundoPag"]}>
        <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
        <Navegador texto2="#F2F2F2" ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Pagamento" bolinha1="#F2B705" bolinha2="#025373" bolinha3="#F2B705" />

        <div className={styles["container"]}>
          <div className={styles["blocoCadastro"]}>
            <div className={styles["tituloBloco"]}>
              <span>Preencha os campos adicionais para concluir o cadastro</span>
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
                            height: "11vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "0.7rem",
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
                  <div className={styles["InputDesc"]}>
                    <div className={styles["labelDiv"]}>
                      <label htmlFor="">Descrição: </label>
                      {errorMessages.descricao && <span className={styles["error"]}>* {errorMessages.descricao}</span>}
                    </div>
                    <textarea type="text" className={styles["inputDescricao"]} placeholder="Digite uma descrição sobre a empresa" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                  </div>
                </div>

                <div className={styles["informacoesContatoEmpresa"]}>
                  <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                      <label htmlFor="">CEP: </label>
                      {errorMessages.cep && <span className={styles["error"]}>* {errorMessages.cep}</span>}
                    </div>
                    <InputMask mask="99999-999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                  </div>
                  <div className={styles["InputDiv"]}>
                    <div className={styles["labelDiv"]}>
                      <label htmlFor="">Linkedin: </label>
                      {errorMessages.linkedin && <span className={styles["error"]}>* {errorMessages.linkedin}</span>}
                    </div>
                    <input type="text" className={styles["input"]} style={{ width: "100%" }} placeholder="Cole aqui o link do linkedin da empresa" value={linkedin} onChange={(e) => handleInputChange(e, setLinkedin)} />
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