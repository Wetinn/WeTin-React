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

    const renderColor = () =>{

        if(props.data >= 66){
            return "#02D977"
        } else if(props.data >= 33 && props.data <= 66){
            return "#F2B705";
        } else if(props.data <= 33){
            return "#EA4A4A"
        } else {
            return "#02D977"
        }
    }

    const data = {
        datasets: [
            {
                label: 'Aderência',
                data: [props.data, (100 - props.data)],
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