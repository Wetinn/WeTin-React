import styles from './NotificationCollapsed.module.css';
import expandIconBlack from '../../../utils/assets/icons/ExpandIconBlack.png'


export default function NotificationCollapsed(props) {
  return (
    <>
    <div className={styles["card"]} onClick={props.onExpand}>
        {props.novo &&(
            <div className={styles["simbolo-nova-notificacao"]}></div>
        )}
        <div className={styles["conteudo"]}>
          <h2 className={styles["titulo-notificacao"]}>{props.titulo}</h2>
          <p className={styles["corpo-notificacao"]}>{props.corpo}</p>
        </div>
        <img className={styles["icone-expandir"]} alt="Expandir" src={expandIconBlack}></img>
    </div>
    </>
  );
};

