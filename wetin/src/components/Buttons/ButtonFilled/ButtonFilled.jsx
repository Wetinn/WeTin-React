import styles from './ButtonFilled.module.css'
import { useNavigate } from "react-router-dom";

export default function ButtonFilled(props) {
 
    const navigate = useNavigate()

    const handleClick = () => {
        
        if (props.path && typeof props.path === 'string') {
            navigate(props.path);
        } else if (typeof props.onClick === 'function') {
            props.onClick();
        } else {
            console.warn("Neither path nor valid onClick function provided.");
        }
    }

    return(
        <>
            <button className={styles["button-filled"]} style={{height: props.height + "px"}} onClick={handleClick}>{props.texto}</button>
        </>
    )
}