import styles from './ButtonFilled.module.css'

export default function ButtonFilled(props) {
    return(
        <>
            <button className={styles["button-filled"]}>{props.texto}</button>
        </>
    )
}