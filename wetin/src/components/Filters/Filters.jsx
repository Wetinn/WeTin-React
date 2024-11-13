import CheckBox from './CheckBox/CheckBox';
import styles from './Filters.module.css';
import React, { useState } from 'react';
import filtrosLogica from '../../utils/filtrosLogica';

export default function Filters(props) {

    const [Filters, setFilters] = useState({}); // Estado para armazenar filtros por categoria
    const tituloFiltros = props.tituloFiltros;
    const filtrosFormatados = filtrosLogica.separarFiltros(props.filtros);

    const showFilteresResults = (filters) => {
        const variables = Object.values(filters).flat();
        props.getObjects(variables);
    };

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters };
        newFilters[category] = filters;

        showFilteresResults(newFilters);
        setFilters(newFilters);
    };

    const renderFilters = () => tituloFiltros.map((titulo, index) => (
        <div key={index}>
            <h2 className={styles["filter-topic"]}>{titulo.titulo}</h2>
            <CheckBox
                handleFilters={(topicos) => handleFilters(topicos, titulo.titulo)}
                filtro={filtrosFormatados[index]}
            />
        </div>
    ));

    return (
        <div className={styles["filter-box"]}>
            <h2 className={styles["filter-header"]}>Filtros</h2>
            {renderFilters()}
        </div>
    );
}
