import React, { useEffect, useState } from "react";
import BarraPesquisa from "../BarraPesquisa";
import styles from './BarraOnFocus.module.css';

export default function BarraOnFocus(props) {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(sessionStorage.getItem('searchHistory')) || [];
        setSearchHistory(history);
    }, []);

    return (
        <div className={styles["overlay"]}>
            <BarraPesquisa onSearch={props.onSearch}/>
            <div className={styles["history"]}>
                {searchHistory.slice(-5).map((term, index) => (
                    <div key={index} className={styles["history-item"]}>
                        {term}
                    </div>
                ))}
            </div>
        </div>
    )
}
