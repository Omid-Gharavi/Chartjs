import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend,
    Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { lineDataChart } from "../data"
import zoomPlugin from 'chartjs-plugin-zoom';

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend,
    Filler,
    zoomPlugin
)

const LineGraph = () => {
    const options = {
        responsive: true,
        hoverRadius: 6,
        hoverBackgroundColor: 'orange',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            filler: {
                propagate: false,
                drawTime: 'beforeDatasetsDraw'
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                }
            }
        },
        // maintainAspectRatio: false,
    };

    return (
        <Line options={options} data={lineDataChart}></Line>
    )
}

export default LineGraph