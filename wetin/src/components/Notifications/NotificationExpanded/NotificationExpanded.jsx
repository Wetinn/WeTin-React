import styles from './NotificationExpanded.module.css';
import expandIconBlack from '../../../utils/assets/icons/ExpandIconBlack.png'


export default function NotificationExpanded(props) {
    return (
        <>
            <div className={styles["gaveta"]} onClick={props.onCollapse}>
                <div className={styles["card"]}>
                    {props.novo && (
                        <div className={styles["simbolo-nova-notificacao"]}></div>
                    )}
                    <div className={styles["conteudo"]}>
                        <h2 className={styles["titulo-notificacao"]}>{props.titulo}</h2>
                    </div>
                    <img className={styles["icone-expandir"]} alt="Expandir" src={expandIconBlack}></img>
                </div>
                <p className={styles["corpo-notificacao"]}>{props.corpo}</p>
            </div>
        </>
    );
};

