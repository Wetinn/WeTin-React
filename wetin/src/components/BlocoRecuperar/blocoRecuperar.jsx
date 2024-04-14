import styles from "./blocoRecuperar.module.css"
import BtLogin from "../botaoLogin/BtLogin"

export default function name(props) {
    return (

        <>
            <div className={styles["containner_login"]}>
                <div className={styles["blocoLogin"]}>
                    <div className={styles["tituloBloco"]}>
                        <span>
                            {props.textoTitulo}
                        </span>
                    </div>

                    <div className={styles["textoExplicativo"]}>
                        <span>
                            {props.descricao}
                        </span>
                    </div>

                    <div className={styles["inputsBloco"]}>
                        {
                            props.temInput ?
                                <div id="teste" style={{display: "flex"}}>
                                    <div className={styles["inputEmail"]}>
                                        <label htmlFor="inputLoginEmail">E-mail:</label>
                                        <input type="text" className={styles["inputLoginEmail"]} placeholder="Digite aqui" />
                                    </div>
                                </div> :
                                <div id="teste" style={{display: "flex",height: "5vh"}}>
                                    
                                </div>
                        }
                        <BtLogin textoBotao={props.textoBotao} />
                    </div>
                </div>
            </div>
        </>

    );
}