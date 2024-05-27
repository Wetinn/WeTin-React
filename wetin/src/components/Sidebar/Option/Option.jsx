import styles from './Option.module.css';
import Icon from '../../Icon/Icon'
import NotificationIcon from '../../Icon/NotificationIcon/NotificationIcon'

export default function Option(props) {
  return (
    <>
        <div className={styles["option"]} onClick={props.onClick}>
          {props.notificacoes ? (
            <NotificationIcon src={props.src} alt={props.alt}/>
          ) : (
            <Icon src={props.src} alt={props.alt}/> 
          )
        }
            <h1>{props.titulo}</h1>
        </div>
    </>
  );
};

