// import api from "../../api";
//import { toast } from "react-toastify";
import styles from "./CadastroImg.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";



export default function CadastroRecrutador() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [especialidades, setEspecialidades] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [cep, setCep] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    especialidades: "",
    descricao: "",
    linkedin: "",
    cep: ""
  });

  const validarInputs = () => {
    var naoTemErro = true;
    var errors = {
      descricao: "",
      especialidades: "",
      linkedin: "",
      cep: ""
    };

    if (!descricao) {
      errors.descricao = "Descrição é obrigatório";
      naoTemErro = false;
    }
    if (!especialidades) {
      errors.especialidades = "Especialidade é obrigatório";
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
  }

  const handleSave = async () => {
    setLoading(true)
    if (validarInputs()) {
      const responseCep = await handleCep();
      if(responseCep){
        try {
          if (responseCep != null) {
            const continuacao = {
              linkedin,
              cep,
              especialidades,
              descricao,
              tag: {
                tipo: "localizacao",
                valor: responseCep.localidade
              }
            }
            sessionStorage.setItem("continuacao", JSON.stringify(continuacao));
            navigate("/fotoCandidato");
          } else {
            toast.error("CEP inválido!");
          }
        } catch (err) {
          console.error("Erro inesperado:", err);
          toast.error("Ocorreu um erro inesperado.");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("CEP Inválido")
        setLoading(false)
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
  }

  const handleBack = () => {
    navigate("/recrutador");
  };


  return (
    <>
      {loading && <Loading />}
      <div className={styles["fundoPag"]}>
        <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
        <Navegador ativa="#025373" texto2="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Quiz" bolinha1="#F2B705" bolinha2="#025373" bolinha3="#F2B705" />

        <div className={styles["container"]}>
          <div className={styles["blocoCadastro"]}>
            <div className={styles["tituloBloco"]}>
              <span>Preencha os campos adicionais para concluir o cadastro</span>
            </div>
            <div className={styles["inputsBloco"]}>
              <form>
                <div className={styles["infosEmpresa"]}>
                  <div className={styles["InputDesc"]}>
                    <div className={styles["InputDesc"]}>
                      <div className={styles["labelDiv"]}>
                        <label htmlFor="">Especialidades: </label>
                        {errorMessages.especialidades && <span className={styles["error"]}>* {errorMessages.especialidades}</span>}
                      </div>
                      <textarea type="text" className={styles["inputDescricao"]} placeholder="Descreva suas especialidades" value={especialidades} onChange={(e) => handleInputChange(e, setEspecialidades)} />
                    </div>
                  </div>
                  <div className={styles["InputDesc"]}>
                    <div className={styles["InputDesc"]}>
                      <div className={styles["labelDiv"]}>
                        <label htmlFor="">Descrição: </label>
                        {errorMessages.descricao && <span className={styles["error"]}>* {errorMessages.descricao}</span>}
                      </div>
                      <textarea type="text" className={styles["inputDescricao"]} placeholder="Descreva brevemente seu perfil" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                    </div>
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