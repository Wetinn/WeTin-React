import styles from "./EditarEmpresa.module.css";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import iconDeletar from "../../../utils/assets/icons/DeleteIconBlue.svg"
import iconEditar from "../../../utils/assets/icons/EditIcon.png"
import axios from "axios";
import InputMask from 'react-input-mask';
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { geraTag } from "../../../utils/tagUtils";
import Modal from "../../../components/Modal/Modal";

export default function EditarEmpresa() {
  const navigate = useNavigate();

  const empresaLogadaJSON = sessionStorage.getItem('user');
  var user = JSON.parse(empresaLogadaJSON);

  const [ExpandirSideBar, setExpandirSideBar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [imagem, setImagem] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    nome: "",
      telefone: "",
      cep: "",
      email: "",
      descricao: "",
      linkedin: "",
      cnpj: ""
  });


  useEffect(() => {
    const buscarEmpresa = async () => {
      try {

        setLoading(true);

        const response = await axios.get(`/empresas/${user.id}`);
        var empresaData = response.data;
        console.log(empresaData)

        setCep(empresaData.cep || "");
        setNome(empresaData.nome || "");
        setEmail(empresaData.email || "");
        setTelefone(empresaData.telefone || "");
        setDescricao(empresaData.descricao || "");
        setLinkedin(empresaData.linkedin || "");
        setCnpj(empresaData.cnpj || "");
        setImagem(empresaData.imagem);

        console.log(empresaData);
        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.log(err);
      }
    };

    buscarEmpresa();
  }, [user.id]);

  const validarInputs = async () => {
    let naoTemErro = true;
    const errors = {
      nome: "",
      telefone: "",
      cep: "",
      email: "",
      descricao: "",
      linkedin: "",
      cnpj: ""
    };

    if (!nome) {
      errors.nome += "Nome da empresa é obrigatório";
      naoTemErro = false;
    }
    if (!telefone) {
      errors.telefone += "Telefone é obrigatório";
      naoTemErro = false;
    }

    if(!email){
      errors.email = "Email é obrigatório"
      naoTemErro = false;
    }

    if (!cep) {
      errors.cep = "CEP é obrigatório";
      naoTemErro = false;
    }
    if (!descricao) {
      errors.descricao = "A descrição é obrigatória";
      naoTemErro = false;
    }
    if (!linkedin) {
      errors.linkedin = "O Linkedin é obrigatório";
      naoTemErro = false;
    }
    if (!cnpj) {
      errors.cnpj = "O CNPJ é obrigatório";
      naoTemErro = false;
    }

    setErrorMessages(errors);
    setHasErrors(!naoTemErro);
    return naoTemErro;
  };

  const atualizarEmpresa = async () => {
    setLoading(true)
    const inputsValidados = await validarInputs();
    if (inputsValidados) {
      const enderecoRetornado = await validaCep();
      if (enderecoRetornado) {
        const empresaEditada = {
          id: user.id,
          nome,
          telefone,
          cep,
          email,
          descricao,
          linkedin,
          cnpj,
          tag: geraTag("localizacao", enderecoRetornado.localidade),
        }
        setLoading(true);
        try {
          await axios.put(`/empresas/${user.id}`, empresaEditada);
          setLoading(false);
          toast.success("Empresa Atualizada")
          sessionStorage.setItem("cepEmpresa", empresaEditada.cep);
          navigate("/dashboard/perfil-empresa")
          toast.success("Empresa atualizada com sucesso!")
        } catch (err) {
          toast.error("Não foi possivel atualizar a empresa")
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("Cep inválido")
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  };

  const validaCep = async () => {
    try {
      const cepFormatado = cep.replace("-", "");
      const response = await axios.get(`https://viacep.com.br/ws/${cepFormatado}/json/`);
      const data = response.data;

      if (data.erro) {
        return null;
      } else {
        return data
      }

    } catch (err) {
      toast.error("CEP Inválido")
      return null;
    }
  }

  const toggleExpandirSideBar = () => {
    setExpandirSideBar(!ExpandirSideBar)
  }

  function obterPrimeiroErro() {
    for (let key in errorMessages) {
      if (errorMessages[key]) {
        return errorMessages[key];
      }
    }
    return "";
  }

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  }


  return (
    <>
      {hasErrors && <Modal titulo="Erro ao atualizar a empresa" mensagem={obterPrimeiroErro()} onClick={() => setHasErrors(false)} />}
      {loading && <Loading />}
      {ExpandirSideBar && <Overlay />}
      {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
      <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
        <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
        <div className="deixaEuVer" style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "20px", backgroundColor: "#F2F2F2" }}>
          <div className={styles["titulo"]}>
            <span>Editar perfil da Empresa</span>
          </div>

          <div className={styles["caixaEditarEmpresa"]}>
            <div className={styles["editarImagem"]}>
              <div className={styles["fotoEmpresa"]}>
                <img className={styles["foto-perfil"]} src={imagem} alt="Foto perfil" />
              </div>
              <img src={iconEditar} alt="" className={styles["iconEditar"]} />

              <img src={iconDeletar} alt="" className={styles["iconDeletar"]} />
            </div>
            <div className={styles["caixaForms"]}>
              <form className={styles['formEditarVaga']}>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">Nome da Empresa: </label>
                    <span>*</span>
                  </div>
                  <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa"
                    value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">E-Mail: </label>
                    <span>*</span>
                  </div>
                  <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o e-mail da empresa" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">Telefone: </label>
                    <span>*</span>
                  </div>
                  <InputMask mask="(99) 99999-9999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o telefone da empresa" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">CEP: </label>
                    <span>*</span>
                  </div>
                  <InputMask mask="99999-999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">Descrição: </label>
                    <span>*</span>
                  </div>
                  <textarea type="text" className={styles["textArea"]} style={{ width: "85%", height: "30vh" }} placeholder="Descreva sobre sua empresa" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">Linkedin: </label>
                    <span>*</span>
                  </div>
                  <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Cole aqui o link do linkedin" value={linkedin} onChange={(e) => handleInputChange(e, setLinkedin)} />
                </div>
                <div className={styles["InputDiv"]}>
                  <div className={styles["labelDiv"]}>
                    <label htmlFor="">CNPJ: </label>
                    <span>*</span>
                  </div>
                  <InputMask mask="99.999.999/9999-99" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CNPJ da empresa" value={cnpj} onChange={(e) => handleInputChange(e, setCnpj)} />
                </div>
              </form>
              <div className={styles["botaoSalvar"]}>
                <button onClick={atualizarEmpresa}>Salvar Alterações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}