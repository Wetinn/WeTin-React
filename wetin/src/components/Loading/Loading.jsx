import React from 'react';
import Lottie from 'react-lottie-player';
import styles from './Loading.module.css';
import loadingAnimation from '../../utils/assets/animations/LoadingAnimation.json';

export default function Loading() {
    return (
        <div className={styles["loading-div"]}>
            <Lottie
                loop
                animationData={loadingAnimation}
                play
                style={{ width: 300, height: 300 }}
            />
        </div>
    )
}