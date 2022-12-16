import React from 'react';
import {Line} from 'react-chartjs-2';
import {IHistoryCurrency} from "../types/historyCurrency";
import {CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from "chart.js";


interface ILineChartProps{
    history: IHistoryCurrency[]
}

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const LineChart: React.FC<ILineChartProps> = ({history}) => {
    const month = history.map((e) => {
        const date = new Date(e.time);

        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    });

    const data = {
        labels: month,
        datasets: [
            {
                label: "Price usd",
                data: history.map((e) => e.priceUsd),
                fill: true,
                pointBorderColor: "black",
                pointBorderWidth: 2,
                pointRadius: 1,
                tension: 1,
            },
        ],
    };

    return <Line data={data} style={{ maxHeight: "300px" }} />;
};