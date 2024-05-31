import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function HalfDoughnutChart(){
    const data = {
        labels: ['Show', 'Hide'],
        datasets: [
            {
                label: 'shop 1',
                data: [3, 6],
                backgroundColor: ['#61dbfb', 'black'],
                borderColor: ['#61dbfb', 'black'],
                circumference: 180,
                rotation: 270
            }
        ]
    }

    const options = {

    }

    return(
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}