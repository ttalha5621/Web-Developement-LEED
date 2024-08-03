import React from 'react';
import { Line } from 'react-chartjs-2';

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
    },
};

const EmailsCampaignChart = (props) => {
    const chartColor = "#FFFFFF";

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#18ce0f");
        gradientStroke.addColorStop(1, chartColor);

        const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgb(24,206,15, 0.4)");

        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [
                {
                    label: "Email Stats",
                    borderColor: "#18ce0f",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#18ce0f",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
                },
            ],
        }
    }


    return (
        <Line data={data} options={gradientChartOptionsConfiguration} />
    )
}

export default EmailsCampaignChart;