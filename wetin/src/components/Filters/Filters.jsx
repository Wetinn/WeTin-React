import CheckBox from './CheckBox/CheckBox';
import styles from './Filters.module.css';
import React, { useState } from 'react';

export default function Filters(props) {

    const [Filters, setFilters] = useState({
        filtros: [],
    })

    const tituloFiltros = props.tituloFiltros;
    const filtros = props.filtros;
    
    const showFilteresResults = (filters) => {

        const variables = {
            filters: filters
        }

        props.getObjects(variables)
    }

    const handleFilters = (filters, category) => {
        console.log(filters)
        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "") {
        }

        showFilteresResults(newFilters)
        setFilters(newFilters)
    }

    const renderFilters = () => tituloFiltros.map((value, index) => (
        <div>
            <React.Fragment key={index}>
                <h2 className={styles["filter-topic"]}>{value.titulo}</h2>
                <CheckBox
                    handleFilters={filtros => handleFilters(filtros, value.titulo)}
                    filtro={filtros[index]}
                />
            </React.Fragment>
        </div>
    ))
        
    
    return (
        <>
        <div className={styles["filter-box"]}>
            <h2 className={styles["filter-header"]}>Filtros</h2>
            {renderFilters()}
        </div>
        </>
    )
}