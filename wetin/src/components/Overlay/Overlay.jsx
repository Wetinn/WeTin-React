import styles from './Overlay.module.css'

export default function Overlay({onClick}){
    return (
        <div className={styles["overlay"]} onClick={onClick}></div>
    )
}