import styles from './ButtonOutline.module.css'
import { useNavigate } from "react-router-dom";


export default function ButtonOutline(props) {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.path)
        if (props.path != null) {
            navigate(props.path);
        } else if (typeof props.onClick === 'function') {
            props.onClick();
        } else {
            console.warn("Neither path nor valid onClick function provided.");
        }
    }

    return(
        <>
            <button className={styles["button-outline"]} onClick={handleClick}>{props.texto}</button>
        </>
    )
}