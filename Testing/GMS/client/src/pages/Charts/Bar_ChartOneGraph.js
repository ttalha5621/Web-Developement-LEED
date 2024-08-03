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
    responsive: 1,
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
                display: 0,
                gridLines: 0,
                ticks: {
                    display: false,
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false,
                },
            },
        ],
    },
    layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
    }
};

const Bar_ChartOneGraph = () => {
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");

        const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgb(44, 168, 255, 0.6)");

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
                    label: "Active Countries",
                    backgroundColor: gradientFill,
                    borderColor: "#2CA8FF",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#2CA8FF",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    borderWidth: 1,
                    data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155],
                },
            ],
        }

    }

    return (
        <Bar data={data} options={gradientChartOptionsConfiguration} />
    )
}

export default Bar_ChartOneGraph;