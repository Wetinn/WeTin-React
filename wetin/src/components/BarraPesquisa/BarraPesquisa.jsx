import React, { useState, useEffect } from 'react';
import styles from './BarraPesquisa.module.css';
import searchIcon from '../../utils/assets/icons/SearchIcon.png';

export default function BarraPesquisa(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(sessionStorage.getItem('searchHistory')) || [];
        setSearchHistory(history);
    }, []);

    const handleSearch = () => {
        if (props.onSearch) {
            props.onSearch(searchTerm);
        }

        // Save the search term to sessionStorage
        let history = JSON.parse(sessionStorage.getItem('searchHistory')) || [];
        history.push(searchTerm);
        if (history.length > 5) {
            history.shift(); // Keep only the last 5 items
        }
        sessionStorage.setItem('searchHistory', JSON.stringify(history));
        setSearchHistory(history);
        setIsFocused(false); // Close the history drawer after search
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        // Delay the blur event to allow click on history items
        setTimeout(() => setIsFocused(false), 100);
    }

    return (
        <div className={styles["search-bar-container"]} onBlur={handleBlur}>
            <div className={styles["search-bar"]}>
                <button className={styles["search-icon"]} onClick={handleSearch}>
                    <img src={searchIcon} alt="Pesquisar" className={styles["lupa"]} />
                </button>
                <input 
                    type="text" 
                    className={styles["search-input"]} 
                    placeholder={props.placeholder} 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                />
            </div>
            {isFocused && (
                <div className={styles["history"]}>
                    {searchHistory.slice(-5).map((term, index) => (
                        <div key={index} className={styles["history-item"]} onMouseDown={() => setSearchTerm(term)}>
                            {term}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
