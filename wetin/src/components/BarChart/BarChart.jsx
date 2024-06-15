import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, LinearScale, CategoryScale } from "chart.js";
import styles from './BarChart.module.css'
ChartJS.register(
    BarElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale
);

export default function BarChart(props) {

    const qtdVagas = props.qtdVagas === null ? 0 : props.qtdVagas;
    const qtdCandidatos = props.qtdCandidatos === null ? 0 : props.qtdCandidatos; 

    const data = {
        labels: ["vagas", "candidatos"],
        datasets: [
            {
                data: [qtdVagas, qtdCandidatos],
                backgroundColor: ["#F2B705", "#025373"],
                borderColor: ["#F2B705", "#025373"],
                borderWidth: 1,
            },
        ]
    }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Esta opção esconde as legendas
            }
        },
        scales: {
            x: {
                stacked: false,
                barPercentage: 0.5, // Ajuste a largura das barras
                categoryPercentage: 0.5, // Ajuste a largura da categoria
              },
              y: {
                beginAtZero: true,
              }
        }
    }

    return (
        <div className={styles["grafico"]}>
            <Bar
             data={data} options={options} />
        </div>
    )
}