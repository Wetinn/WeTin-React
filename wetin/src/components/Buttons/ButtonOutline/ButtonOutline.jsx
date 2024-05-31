import styles from './ButtonOutline.module.css'

export default function ButtonOutline(props) {

    const handleNavigation = (path) => {
        props.navigate(path)
    }
    return(
        <>
            <button className={styles["button-outline"]} onClick={() => handleNavigation(props.path)}>{props.texto}</button>
        </>
    )
}