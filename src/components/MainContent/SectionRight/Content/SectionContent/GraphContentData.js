export const planetChartData = {
    type: 'line',
    data: {
        labels: ['11a', '12p', '1p', '2p', '3p', '4p'],
        datasets: [
            { // one line graph
                label: 'SPX:IND',
                data: [0.78, 0.64, 0.61, 0.28, 0.37, 0.42, 0.27, 0.38],
                fill: false,
                backgroundColor: [
                    '#5e80e5' // Blue
                ],
                borderColor: [
                    '#5e80e5',
                ],
                borderWidth: 3
            },
            { // another line graph
                label: 'CCMP:IND',
                data: [0.64, 0.52, 0.52, 0.48, 0.35, 0.54, 0.50, 0.49],
                fill: false,
                backgroundColor: [
                    '#ee5c78', // Red
                ],
                borderColor: [
                    '#ee5c78',
                ],
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}

export default planetChartData;