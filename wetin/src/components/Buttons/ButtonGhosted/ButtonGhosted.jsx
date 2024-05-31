import { useNavigate } from "react-router-dom";

export default function ButtonGhosted(props){

    const navigation = useNavigate()

    const handleNavigation = (path) => {
        navigation(path);
    }

    return(
        <>
            <a href="##" onClick={() => handleNavigation(props.path)}>{props.texto}</a>
        </>
    )
}