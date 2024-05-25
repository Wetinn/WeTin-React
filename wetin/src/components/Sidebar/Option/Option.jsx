import styles from './Option.module.css';
import Icon from '../../Icon/Icon'

export default function Option(props) {
  return (
    <>
        <div className={styles["option"]} onClick={props.onClick}>
            <Icon src={props.src} alt={props.alt}/> 
            <h1>{props.titulo}</h1>
        </div>
    </>
  );
};

