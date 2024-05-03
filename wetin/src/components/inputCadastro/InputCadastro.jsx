import styles from './InputCadastro.module.css';


export default function InputCadastro(props){
    return (
        <>
        <div className={styles["InputDiv"]}>
            <div className={styles["labelDiv"]}>
            <label htmlFor="">{props.label}</label>
            <span>*</span>
            </div>
            <input type="text" className={styles["input"]} style={{width: props.tamanhoInput}} placeholder={props.textoPlaceHolder}/>
        </div>
        </>
    );
}