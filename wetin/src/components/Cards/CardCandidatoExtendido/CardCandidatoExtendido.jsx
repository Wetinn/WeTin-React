import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import styles from "./CardCandidatoExtendido.module.css";
import localIcon from '../../../utils/assets/icons/LocalIcon.png';
import callIcon from '../../../utils/assets/icons/CallIcon.png';
import emailIcon from '../../../utils/assets/icons/EmailIcon.png';
import starIcon from '../../../utils/assets/icons/StarIcon.png';

export default function CardCandidatoExtendido(props) {
  const navigate = useNavigate();

  const cardClass = classNames(styles.card, {
    [styles.recomendacao]: props.recomendacao,
    [styles.favorito]: props.favorito,
  });

  // Função para redirecionar ao perfil do candidato
  const redirectPerfilCandidato = () => {
    navigate(`/dashboard/perfil-candidato/${props.id}`);
  };

  return (
    <div className={cardClass}>
      {/* Cabeçalho com imagem e nome clicáveis */}
      <div onClick={redirectPerfilCandidato} style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}>
        {props.recomendacao && (
          <div className={styles.textoRecomendacao}>
            <h3>Recomendado</h3>
          </div>
        )}
        {props.favorito && (
          <div className={styles.textoFavorito}>
            <img src={starIcon} alt="Icone estrela" />
            <h3>Favorito</h3>
          </div>
        )}
        <img src={props.imagem} alt="Foto usuário" className={styles.fotoUsuario} />
        <h2>{props.nome}</h2>
      </div>

      {/* Informações adicionais */}
      <div className={styles.infos}>
        <div className={styles.info}>
          <img src={localIcon} alt="Ícone de localização" />
          <p>{props.localizacao}</p>
        </div>
        <div className={styles.info}>
          <img src={callIcon} alt="Ícone de telefone" />
          <p>{props.telefone}</p>
        </div>
        <div className={styles.info}>
          <img src={emailIcon} alt="Ícone de e-mail" />
          <p>{props.email}</p>
        </div>
      </div>

      {/* Documentos */}
      {props.documentos && (
        <div className={styles.documentos}>
          <a href={props.documentos[0]} target="_blank" rel="noopener noreferrer">
            Currículo
          </a>
          {props.documentos[1] && (
            <a href={props.documentos[1]} target="_blank" rel="noopener noreferrer">
              Carta
            </a>
          )}
          {props.documentos[2] && (
            <a href={props.documentos[2]} target="_blank" rel="noopener noreferrer">
              Portfólio
            </a>
          )}
        </div>
      )}
    </div>
  );
}
