const showChart = (type, canvas_id) => {
    // type takes string : 'line', 'bar' etc
    // canvas_id takes html element id, the chart will be displayed on
    const ctx = document.getElementById(canvas_id);
    const x_label = [36, 56, 114, 121, 165, 207, 223, 286, 326, 328, 330, 332, 407, 433, 476, 490, 508, 520, 522, 524, 536, 563, 615, 629, 716, 739, 764, 781, 782, 783, 789, 842, 849, 866, 878, 901, 920, 924, 996]
    const y_label = [0, 225, 90, 160, 70, 85, 20, 160, 35, 90, 35, 180, 135, 160, 50, 200, 20, 40, 80, 0, 70, 130, 75, 190, 30, 195, 0, 80, 20, 140, 120, 140, 50, 60, 0, 150, 0, 50, 0] 
    new Chart(ctx, {
        type: type,
        data: {
            labels: x_label,
            datasets: [{
                label: 'Fri, Apr10, 7:51 PM',
                data: y_label,
                borderWidth: 2,
                borderColor: '#8085f0'
            }],
        },


        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 225,
                    beginAtZero: true,
                    ticks: {
                        count: 4,
                        callback: function(value, index, ticks) {
                            return value + '%';
                        }
                    },
                },
                x: {
                    beginAtZero: 0,
                    type: 'linear',
                    min: 0,
                    max: 996,
                    grid: {
                        display: false
                    },
                    ticks: {
                        count: 7
                    }
                },
            },
            plugins: {
                tooltip: {
                    yAlign: 'center',
                    padding: 10,
                    callbacks: {
                        labelColor: function(tooltipItem, chart) {
                            return {
                                backgroundColor: '#1A004C'
                            }
                        },
                    },
                    backgroundColor: '#1A004C'
                },
                legend: {
                    display: false
                },
            },
        }
    });
}

showChart('line', 'myChart')

