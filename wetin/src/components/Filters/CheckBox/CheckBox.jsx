import React, {useState} from 'react'
import { Checkbox } from "antd" 
import styles from "./CheckBox.module.css"
import '../../../../node_modules/antd/dist/antd'


export default function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        
        const currentIndex = Checked.indexOf(value)
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked);
    }

    var filtros = props.filtro;
    
    const renderCheckboxLists = () => filtros.map((value, index) => (
        <div className={styles['div-org']}>   
            <React.Fragment key={index}>
                <span className={styles["span"]}>{value.topico}</span>
                <Checkbox
                    className={styles["ant-checkbox-checked"]}
                    onChange={() => handleToggle(value)}
                    type="checkbox"
                    checked={Checked.indexOf(value) === -1 ? false : true}
                />
            </React.Fragment>
        </div>
    ))

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {renderCheckboxLists()}
            </div>
        </>
    )
}