import styles from './PublicarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonFilled from '../../../components/Buttons/ButtonFilled/ButtonFilled';
import comparacaoDataAtual from '../../../utils/comparacaoDataAtual';
import { geraTag, selectValueHandler } from '../../../utils/tagUtils';
import Modal from '../../../components/Modal/Modal';

export default function PublicarVaga() {

  const empresaLogadaJSON = sessionStorage.getItem('user');
  var user = JSON.parse(empresaLogadaJSON);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cep, setCep] = useState("");
  const [responsabilidades, setResponsabilidades] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [beneficios, setBeneficios] = useState("");
  const [jornada, setJornada] = useState(0);
  const [regime, setRegime] = useState(0);
  const [dtExpiracao, setDtExpiracao] = useState("");
  const [salarioMinimo, setSalarioMinimo] = useState("");
  const [salarioMaximo, setSalarioMaximo] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [mensagemModal, setMensagemModal] = useState("");


  const regimeOptions = [
    {
      texto: "Carteira Assinada (CLT)",
      valor: "CARTEIRA",
      id: 1
    },
    {
      texto: "Autônomo(PJ)",
      valor: "PJ",
      id: 2
    },
    {
      texto: "Temporário",
      valor: "TEMPORARIO",
      id: 3 
    },
    {
      texto: "Autônomo",
      valor: "AUTONOMO",
      id: 4
    },
    {
      texto: "Freelancer",
      valor: "FREELANCER",
      id: 5
    }
  ]

  const jornadaOptions = [
    {
      texto: "Meio período",
      valor: "MEIO_PERIODO",
      id: 1
    },
    {
      texto: "Integral",
      valor: "INTEGRAL",
      id: 2
    },
    {
      texto: "Noturno",
      valor: "NOTURNO",
      id: 3
    }
  ];


  const [errorMessages, setErrorMessages] = useState({
    titulo: "",
    descricao: "",
    cep: "",
    pretensaoSalarial: "",
    responsabilidades: "",
    requisitos: "",
    beneficios: "",
    periodo: "",
    cargaHoraria: "",
    dtCriacao: "",
    dtExpiracao: ""
  });

  const validarInputs = async () => {
    let naoTemErro = true;
    const errors = {
      titulo: "",
      descricao: "",
      cep: "",
      pretensaoSalarial: "",
      responsabilidades: "",
      requisitos: "",
      beneficios: "",
      periodo: "",
      cargaHoraria: "",
      dtCriacao: "",
      dtExpiracao: ""
    };

    if (!titulo) {
      errors.titulo += "Título da vaga é obrigatório";
      naoTemErro = false;
    }
    if (!descricao) {
      errors.descricao += "Descrição da vaga é obrigatória";
      naoTemErro += false;
    }

    if (!cep) {
      errors.cep = "CEP é obrigatório";
      naoTemErro = false;
    }
    if (salarioMaximo < salarioMinimo) {
      errors.pretensaoSalarial = "Salário máximo deve ser maior que o mínimo!";
      naoTemErro = false;
    }
    if (salarioMaximo < 0) {
      errors.pretensaoSalarial = "Salário máximo deve ser maior que o 0";
      naoTemErro = false;
    }
    if (salarioMinimo < 0) {
      errors.pretensaoSalarial = "Salário mínimo deve ser maior que o 0";
      naoTemErro = false;
    }

    if (salarioMaximo == "" || salarioMaximo == 0) {
      errors.pretensaoSalarial = "Salário máximo é obrigatório";
      naoTemErro = false;
    }
    if (salarioMinimo == "" || salarioMinimo == 0) {
      errors.pretensaoSalarial = "Salário mínimo é obrigatório";
      naoTemErro = false;
    }

    if (!responsabilidades) {
      errors.especialidade = "Responsabilidades é obrigatória";
      naoTemErro = false;
    }
    if (!requisitos) {
      errors.requisitos = "Requisitos são obrigatórios";
      naoTemErro = false;
    }
    if (!beneficios) {
      errors.beneficios = "Benefícios são obrigatórios";
      naoTemErro = false;
    }
    if (!jornada) {
      errors.jornada = "Jornada de Trabalho é obrigatório";
      naoTemErro = false;
    }
    if (!regime) {
      errors.regime = "Tipo de Regime é obrigatória";
      naoTemErro = false;
    }
    if (!dtExpiracao) {
      errors.dtExpiracao = "Data de expiração é obrigatória";
      naoTemErro = false;
    } else {
      if(!comparacaoDataAtual(dtExpiracao)){
        errors.dtExpiracao = "Data de expiração é menor que a data atual";
        naoTemErro = false; 
      }
    }

    setErrorMessages(errors);
    setHasErrors(!naoTemErro);
    return naoTemErro;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    
    // Aguarde a validação do CEP
    const enderecoRetornado = await validaCep();
    setEndereco(enderecoRetornado);
    if (enderecoRetornado) {
      const inputsValidados = await validarInputs();
      if (inputsValidados) {
        const vagaCadastrada = {
          titulo,
          descricao,
          cep,
          pretensaoSalarial: salarioMinimo + " - " + salarioMaximo,
          responsabilidades,
          requisitos,
          beneficios,
          jornada,
          regime,
          statusVaga: "ABERTA",
          imagem: await fetchEmpresaImagem(),
          dtCriacao: new Date().toLocaleDateString('pt-BR'),
          dtExpiracao,
          tag: geraTag("localizacao", endereco.localidade),
        };
  
        setLoading(true);
        try {
          await axios.post(`/vagas/${user.id}`, vagaCadastrada);
          setLoading(false);
          toast.success('Vaga publicada com sucesso');
          navigate("/dashboard/vagas-publicadas");
        } catch (err) {
          console.error(err);
          setLoading(false);
          toast.error('Não foi possível publicar a vaga');
        }
      }
    } else {
      toast.error('CEP inválido!');
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
      return null;
    }
  }

  const fetchEmpresaImagem = async () => {
    try{
      const response = await axios.get(`/empresas/${user.id}`);
      return response.data.imagem;
    } catch(err){
      console.log(err)
      return "";
    }
  }

  const handleMascaraDataInput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }
    e.target.value = value;
  }

  function obterPrimeiroErro() {
    for (let key in errorMessages) {
      if (errorMessages[key]) {
        return errorMessages[key];
      }
    }
    return ""; 
  }

  const toggleExpandirSideBar = () => {
    setExpandirSideBar(!expandirSideBar);
  };
  const [expandirSideBar, setExpandirSideBar] = useState(false);


  return (

    <>
      {hasErrors && <Modal titulo="Erro ao públicar a vaga" mensagem={obterPrimeiroErro()} onClick={() => setHasErrors(false)}/>}
      {loading && <Loading />}
      {expandirSideBar && <Overlay />}
      {expandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
      <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
        <SidebarCollapsed />
        <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw", flex: "1" }}>
          <div className={styles["caixa-vagas"]}>
            <div className={styles["titulo"]}>
              <span>Publicar Vaga</span>
            </div>
            <form className={styles["formulario"]} action="">
              <div className={styles["textInput"]}>
                <label htmlFor="">Título: <span>*</span></label>
                <input
                  type='text'
                  placeholder='Digite o título da vaga'
                  onChange={(e) => setTitulo(e.target.value)}
                  value={titulo}
                />
              </div>

              <div className={styles["textInput"]}>
                <label htmlFor="">Descrição: <span>*</span></label>
                <textarea
                  placeholder='Digite o título da vaga'
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                />
              </div>

              <div className={styles["textInput"]}>
                <label htmlFor="">Requisitos: <span>*</span></label>
                <textarea
                  placeholder='Digite o título da vaga'
                  onChange={(e) => setRequisitos(e.target.value)}
                  value={requisitos}
                />
              </div>
              <div className={styles["textInput"]}>
                <label htmlFor="">Responsabilidades: <span>*</span></label>
                <textarea
                  placeholder='Digite o título da vaga'
                  onChange={(e) => setResponsabilidades(e.target.value)}
                  value={responsabilidades}
                />
              </div>
              <div className={styles["textInput"]}>
                <label htmlFor="">Benefícios: <span>*</span></label>
                <textarea
                  placeholder='Digite o título da vaga'
                  onChange={(e) => setBeneficios(e.target.value)}
                  value={beneficios}
                />
              </div>

              <div className={styles["textInputSalario"]}>
                <label htmlFor="">Pretenção Salarial: <span>*</span></label>
                <div className={{ display: "flex", flexDirection: "row", width: "100%" }}>
                  <input
                    type='number'
                    placeholder='Min'
                    className={styles["input_salario"]}
                    onChange={(e) => setSalarioMinimo(e.target.value)}
                    value={salarioMinimo}
                  />
                  <input
                    type='number'
                    placeholder='Max'
                    className={styles["input_salario"]}
                    onChange={(e) => setSalarioMaximo(e.target.value)}
                    value={salarioMaximo}
                  />
                </div>
              </div>

              <div className={styles["textInputCep"]}>
                <label htmlFor="">CEP (Formato: 00000-000): <span>*</span></label>
                <input
                  type='text'
                  placeholder='Digite o CEP da empresa'
                  onChange={(e) => setCep(e.target.value)}
                  value={cep}
                />
              </div>

              <div className={styles["select_containers"]}>
                <div className={styles["select_box"]}>
                  <label htmlFor="">Tipo de Regime: <span>*</span></label>
                  <select value={regime} onChange={(e) => setRegime(e.target.value)}>
                    <option value={0}>Selecione</option>
                    {regimeOptions &&
                      regimeOptions.map(opcao => <option value={opcao.valor}>{opcao.texto}</option>)
                    }
                  </select>
                </div>

                <div className={styles["select_box"]}>
                  <label htmlFor="">Jornada de trabalho: <span>*</span></label>
                  <select value={jornada} onChange={(e) => setJornada(e.target.value)}>
                    <option value={0}>Selecione</option>
                    {jornadaOptions &&
                      jornadaOptions.map(opcao => <option value={opcao.valor}>{opcao.texto}</option>)
                    }
                  </select>
                </div>
              </div>

              <div className={styles["textInputCep"]}>
                <label htmlFor="">Data expiração: <span>*</span></label>
                <input
                  id="dataInput"
                  type='text'
                  placeholder="DD/MM/AAAA"
                  maxlength="10"
                  onChange={(e) => {
                    setDtExpiracao(e.target.value)
                  }}
                  onKeyPress={(e) => handleMascaraDataInput(e)}
                  value={dtExpiracao}
                />
              </div>
              <div className={styles["button_box"]}>
                <button className={styles["botao_publicar"]} onClick={(e) => handleSave(e)}>Públicar vaga</button>
              </div>

            </form>
            <h3></h3>
            <div >
            </div>
          </div>
        </div>
      </div>
    </>

  );
}