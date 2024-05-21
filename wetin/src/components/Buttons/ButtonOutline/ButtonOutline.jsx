import styles from './ButtonOutline.module.css'

export default function ButtonOutline(props) {
    return(
        <>
            <button className={styles["button-outline"]}>{props.texto}</button>
        </>
    )
}