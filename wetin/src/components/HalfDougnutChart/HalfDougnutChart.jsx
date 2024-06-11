import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import styles from './HalfDoughnutChart.module.css'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function HalfDoughnutChart(props){

    let dado = Number(props.data).toFixed(2);

    const renderColor = () =>{

        if(dado >= 66){
            return "#02D977"
        } else if(dado >= 33 && dado <= 66){
            return "#F2B705";
        } else if(dado <= 33){
            return "#EA4A4A"
        } else {
            return "#02D977"
        }
    }

    const data = {
        datasets: [
            {
                label: 'Aderência',
                data: [dado, (100 - dado)],
                backgroundColor: [renderColor(), 'white'],
                borderColor: [renderColor(), 'white'],
                circumference: 180,
                rotation: 270
            }
        ]
    }

    const options = {

    }

    return(
        <div className={styles["grafico"]}>
            <Doughnut data={data} options={options} />
        </div>
    )
}