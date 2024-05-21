import styles from './ButtonDanger.module.css'

export default function ButtonDanger(props) {
    return(
        <>
            <button className={styles["button-danger"]}>{props.texto}</button>
        </>
    )
}