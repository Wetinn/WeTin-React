import React from "react";
import styles from "./BtLogin.module.css";
import { useNavigate } from "react-router-dom";

export default function BtLogin(props) {
    const navigate = useNavigate();

    return (
        <div className={styles.btLogin}>
            <button onClick={() => navigate(props.pagDesejada)}>
                {props.textoBotao}
            </button>
        </div>
    );
}