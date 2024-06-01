import React from 'react';
import Lottie from 'react-lottie-player';
import styles from './ErrorWarning.module.css';
import errorWarningAnimation from '../../utils/assets/animations/ErrorWarningAnimation.json';

export default function ErrorWarning() {
    return (
        <div className={styles["loading-div"]}>
            <Lottie
                loop
                animationData={errorWarningAnimation}
                play
                style={{ width: 300, height: 300 }}
            />
            <h1 className={styles["error-message"]}>Ops... Estamos com problemas no momento, tente novamente mais tarde</h1>
        </div>
    )
}