import styles from './BarraPesquisa.module.css'
import searchIcon from '../../utils/assets/icons/SearchIcon.png'

export default function BarraPesquisa(props){
    
    return(
        <>
            <div className={styles["search-bar"]}>
                <button className={styles["search-icon"]}>
                    <img src={searchIcon} alt="Pesquisar" className={styles["lupa"]} />
                </button>
                <input type="text" className={styles["search-input"]} placeholder={props.placeholder} />
            </div>
        </>
    )
}