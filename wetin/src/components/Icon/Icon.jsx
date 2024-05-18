
import styles from './Icon.module.css';

export default function Icon(props){
    return(
        <>
        <img className={styles["icon"]} src={props.src} alt={props.alt}/>
        </>
    );
}
