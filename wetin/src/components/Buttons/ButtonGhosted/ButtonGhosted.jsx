import { useNavigate } from "react-router-dom";

export default function ButtonGhosted(props){

    const navigate = useNavigate()

    const handleClick = () => {
        if(props.path != null){
            navigate(props.path);
        } else {
            props.onClick()
        }
    }


    return(
        <>
            <a href="##" onClick={handleClick}>{props.texto}</a>
        </>
    )
}