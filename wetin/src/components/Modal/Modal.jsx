import React from 'react';
import styles from './Modal.module.css';

export default function Modal(props) {
    return (
        <div className={styles["overlay"]}>
          <div className={styles["box"]}>
            <div className={styles["header"]}>
              <h1>{props.titulo}</h1>
            </div>
            <div className={styles["body"]}>
              <p>{props.mensagem}</p>
            </div>
            <div className={styles["button_box"]}>
              <button onClick={props.onClick}>
                Fechar
              </button>
            </div>
          </div>
        </div>
    )
}