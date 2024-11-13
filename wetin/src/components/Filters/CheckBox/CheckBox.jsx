import React, { useState } from 'react';
import { Checkbox } from "antd";
import styles from "./CheckBox.module.css";
import formatText from '../../../utils/textFormater';

export default function CheckBox(props) {

    // Estado para armazenar os filtros selecionados no formato correto
    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        // Procurando o índice do filtro no array com base na propriedade e valor
        const currentIndex = Checked.findIndex(item => item.propriedade === value.propriedade && item.valor === value.valor);
        let newChecked = [...Checked];

        if (currentIndex === -1) {
            // Se o filtro não está selecionado, adiciona no array no formato correto
            newChecked.push({
                propriedade: value.propriedade,
                valor: value.valor
            });
        } else {
            // Se o filtro está selecionado, remove do array
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.handleFilters(newChecked); // Envia o array atualizado para o componente pai
    };

    const filtros = props.filtro || [];

    const renderCheckboxLists = () => filtros.map((value, index) => (
        <div key={index} className={styles['div-org']}>
            <span className={styles["span"]}>{formatText(value.topico)}</span>
            <Checkbox
                className={styles["ant-checkbox-checked"]}
                onChange={() => handleToggle(value)}
                type="checkbox"
                checked={Checked.some(item => item.valor === value.valor)}
            />
        </div>
    ));

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {renderCheckboxLists()}
        </div>
    );
}
