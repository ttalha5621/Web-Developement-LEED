import React from "react";
import DashboardChart from '../Charts/DashboardChart';

const options = {
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
const data = {
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
        "DEC",
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
        },
    ],
};
const Chart = (props) => {

    return (
        <div className="panel-header panel-header-lg">
            <DashboardChart />
        </div>
    );
}

export default Chart;