import styles from './ButtonFavorite.module.css';
import outlineStarIcon from '../../../utils/assets/icons/OutlineStarIcon.png'
import filledStarIcon from '../../../utils/assets/icons/FilledStarIcon.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ButtonFavorite(props) {

    const [favoritado, setFavoritado] = useState(props.favoritado);


    useEffect(() => {
        setFavoritado(props.favoritado);
    }, [props.favoritado]);


    const favoritarCandidato = async (idCandidato, idEmpresa) => {
        try {
            await axios.post(`/empresas/${idEmpresa}/favoritar-candidato/${idCandidato}`) ;
            
        } catch (e){
            console.log(e)
        }
    }

    const desfavoritarCandidato = async (idCandidato, idEmpresa) => {
        try {
            await axios.delete(`/empresas/${idEmpresa}/desfavoritar-candidato/${idCandidato}`) ;
        } catch (e){
            console.log(e)
        }
    }

    const handleClick = async () => {
        const novoEstadoFavoritado = !favoritado;
        setFavoritado(novoEstadoFavoritado);
        
        if(favoritado){
            await desfavoritarCandidato(props.idCandidato, props.idEmpresa)
        } else if(!favoritado) {
            await favoritarCandidato(props.idCandidato, props.idEmpresa)
        }
    }

    return(
        <>
            <button className={styles["button-favorite"]} onClick={handleClick}>
                <img className={styles["button-image"]} src={favoritado ? filledStarIcon : outlineStarIcon} alt="Icone estrela"/>
                <h3 className={styles["button-text"]}>{favoritado ? "Desfavoritar" : "Favoritar"}</h3>
            </button>
        </>
    )
}
