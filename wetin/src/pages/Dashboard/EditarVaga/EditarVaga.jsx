import styles from './EditarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { geraTag } from '../../../utils/tagUtils';
import Modal from '../../../components/Modal/Modal';
import { parsePretencaoSalarial, salarioFormatado } from '../../../utils/numberUtils';

export default function EditarVaga() {

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cep, setCep] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [beneficios, setBeneficios] = useState("");
  const [jornada, setJornada] = useState(0);
  const [regime, setRegime] = useState(0);
  const [salarioMinimo, setSalarioMinimo] = useState(null);
  const [salarioMaximo, setSalarioMaximo] = useState(null);
  const [especialidade, setEspecialidade] = useState("");

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
    requisitos: "",
    beneficios: "",
    periodo: "",
    cargaHoraria: "",
    dtCriacao: "",
  });

  useEffect(() => {
    const fetchDadosVaga = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`/vagas/${id}/empresa`)
        handleSetDadosVaga(response.data)
        console.log(response.data)
        setLoading(false)
      } catch (error) {
        toast.error("Não foi possível recuperar as informações dessa vaga, tente novamente mais tarde");
      }
    }

    const handleSetDadosVaga = (dadosVaga) => {
      setTitulo(dadosVaga.titulo)
      setDescricao(dadosVaga.descricao)
      setCep(dadosVaga.cep)
      setEspecialidade(dadosVaga.especialidade)
      setSalarioMinimo(parsePretencaoSalarial(dadosVaga.pretensaoSalarial)[0])
      setSalarioMaximo(parsePretencaoSalarial(dadosVaga.pretensaoSalarial)[1])
      setRequisitos(dadosVaga.requisitos)
      setBeneficios(dadosVaga.beneficios)
      setRegime(dadosVaga.regime)
      setJornada(dadosVaga.jornada)
    }

    fetchDadosVaga()
  }, [id])

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
      dtCriacao: ""
    };

    if (!titulo) {
      errors.titulo += "Título da vaga é obrigatório";
      naoTemErro = false;
    }
    if (!descricao) {
      errors.descricao += "Descrição da vaga é obrigatória";
      naoTemErro += false;
    }

    if (!especialidade) {
      errors.especialidade = "Especialidade é obrigatória"
      naoTemErro = false;
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

    if (salarioMaximo === null || salarioMaximo === 0) {
      errors.pretensaoSalarial = "Salário máximo é obrigatório";
      naoTemErro = false;
    }
    if (salarioMinimo === null || salarioMinimo === 0) {
      errors.pretensaoSalarial = "Salário mínimo é obrigatório";
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
    setErrorMessages(errors);
    setHasErrors(!naoTemErro);
    return naoTemErro;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    // Aguarde a validação do CEP
    setLoading(true)
    const inputsValidados = await validarInputs();
    if (inputsValidados) {
      const enderecoRetornado = await validaCep();
      if (enderecoRetornado) {
        const vagaCadastrada = {
          titulo,
          descricao,
          cep: handleCepFormatacao(),
          pretensaoSalarial: `${salarioFormatado(salarioMinimo)} - ${salarioFormatado(salarioMaximo)}`,
          requisitos,
          beneficios,
          jornada,
          regime,
          fkEmpresa: sessionStorage.getItem("idEmpresa"),
          tag: geraTag("localizacao", enderecoRetornado.localidade),
          especialidade,
          periodo: "MANHA"
        };

        setLoading(true);
        try {
          await axios.put(`/vagas/${id}`, vagaCadastrada);
          toast.success('Vaga alterada   com sucesso');
          navigate("/dashboard/vagas-publicadas");
        } catch (err) {
          console.error(err);
          toast.error('Não foi possível publicar a vaga');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false)
        toast.error("Erro ao buscar o CEP, tente novamente mais tarde")

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

  const handleCepFormatacao = () => {
    if(cep && cep.length === 8){
      let cepFormatado = cep.slice(0, 5) + '-' + cep.slice(5)
      setCep(cepFormatado)
      return cepFormatado
    }
    return cep
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
      {hasErrors && <Modal titulo="Erro ao públicar a vaga" mensagem={obterPrimeiroErro()} onClick={() => setHasErrors(false)} />}
      {loading && <Loading />}
      {expandirSideBar && <Overlay />}
      {expandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
      <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
        <SidebarCollapsed />
        <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw", flex: "1" }}>
          <div className={styles["caixa-vagas"]}>
            <div className={styles["titulo"]}>
              <span>Atualizar Vaga</span>
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
                <label htmlFor="">Especialidade: <span>*</span></label>
                <input
                  type='text'
                  placeholder='Digite a especialidade solicitada pela vaga'
                  onChange={(e) => setEspecialidade(e.target.value)}
                  value={especialidade}
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
              <div className={styles["button_box"]}>
                <button className={styles["botao_atualizar"]} onClick={(e) => handleSave(e)}>Atualizar vaga</button>
              </div>

            </form>
            <div >
            </div>
          </div>
        </div>
      </div>
    </>

  );
}