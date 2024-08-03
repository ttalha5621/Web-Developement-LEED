import React from "react";
import { Line } from 'react-chartjs-2';
import './MyLine.css';

const DashboardChart = (props) => {
    const chartColor = "#FFFFFF";

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");


        const gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");


        return {
            labels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",],
            datasets: [
                {
                    label: "Data",
                    borderColor: chartColor,
                    pointBorderColor: chartColor,
                    pointBackgroundColor: "#1e3d60",
                    pointHoverBackgroundColor: "#1e3d60",
                    pointHoverBorderColor: chartColor,
                    pointBorderWidth: 1,
                    pointHoverRadius: 7,
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
                }
            ],

        }
    }

    var options = {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0,
            },
        },
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "#fff",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
        },
        legend: {
            position: "bottom",
            fillStyle: "#FFF",
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "rgba(255,255,255,0.4)",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 10,
                    },
                    gridLines: {
                        drawTicks: true,
                        drawBorder: false,
                        display: true,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        zeroLineColor: "transparent",
                        display: false,
                    },
                    ticks: {
                        padding: 10,
                        fontColor: "rgba(255,255,255,0.4)",
                        fontStyle: "bold",
                    },
                },
            ],
        },

    };



    return (
        <Line
            data={data}
            options={options}
        />
    )
}

export default DashboardChart;