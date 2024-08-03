import React from 'react';
import { Bar } from 'react-chartjs-2';


const gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
    },
    responsive: true,
    scales: {
        yAxes: [
            {
                gridLines: 0,
                gridLines: {
                    zeroLineColor: "transparent",
                    drawBorder: false,
                },
            },
        ],
        xAxes: [
            {
                gridLines: 0,
                ticks: {
                    display: false,
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    drawBorder: false,
                },
            },
        ],
    },
    layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
    }
};

const Bar_ChartTwoGraph = () => {
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");

        return {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            datasets: [
                {
                    backgroundColor: "#f96332",
                    data: [40, 26, 28, 45, 20, 25, 30, 25, 20, 25, 20, 15],
                },
                {
                    backgroundColor: "#2CA8FF",
                    data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20],
                },
            ],
        }

    }

    return (
        <Bar data={data} options={gradientChartOptionsConfiguration} />
    )
}

export default Bar_ChartTwoGraph;