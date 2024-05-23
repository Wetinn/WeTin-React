import styles from './ButtonFavorite.module.css';
import outlineStarIcon from '../../../utils/assets/icons/OutlineStarIcon.png'
import filledStarIcon from '../../../utils/assets/icons/FilledStarIcon.png'
import { useState } from 'react';

export default function ButtonFavorite(props) {

    var favoritado = props.favoritado;

    const [textoFavoritado, setTextoFavoritado] = useState(favoritado ? "Desfavoritar" : "Favoritar");
    const [srcImagem, setSrcImagem] = useState(favoritado ? filledStarIcon : outlineStarIcon);

    const handleClick = () => {
        favoritado = !favoritado;
        setTextoFavoritado(favoritado ? "Desfavoritar" : "Favoritar")
        setSrcImagem(favoritado ? filledStarIcon : outlineStarIcon)
    }

    return(
        <>
            <button className={styles["button-favorite"]} onClick={handleClick}>
                <img className={styles["button-image"]} src={srcImagem} alt="Icone estrela"/>
                <h3 className={styles["button-text"]}>{textoFavoritado}</h3>
            </button>
        </>
    )
}
