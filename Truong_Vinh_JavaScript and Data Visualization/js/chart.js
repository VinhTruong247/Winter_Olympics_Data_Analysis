var updatingChart = new Chart(document.getElementById('top_countries'), {
    type: 'bar',
    data: {
        labels: ['Norway', 'USA', 'Germany', 'Canada', 'Austria'],
        datasets: [
        {
            label: 'Gold Medal (ones)',
            data: ['132', '105', '92', '73', '64'],
            backgroundColor: [ '#c8102e', '#b22234','#ffce00', '#ff0000', '#ed2939']
        }
    ]
},
 options: {
    scales: {
        xAxes: [{
            display: false
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },

        title: {
            display: true,
            text: 'Total Medals From 1924-2018'

        }
    }

});

function updateAllData(chart, data) {
    chart.data.datasets[0].data = data;
    chart.update();
}

function updateConfig(chart, title) {
    chart.options.title.text = title;
    chart.update();
}

setTimeout(function() {
    updateAllData(updatingChart, ['14', '9', '14', '11', '5'])
    updateConfig(updatingChart, 'Their performance in the nearest Olympics');
}, 10000)

new Chart(document.getElementById('athlete'), {
    type: 'pie',
    data: {
        labels: ['Men', 'Women'],
        datasets: [
            {
                label: 'Medal per Athlete',
                data: ['1310','611'],
                backgroundColor: ['#0000b3', '#da2c43']
            }
        ]
    }
});

new Chart(document.getElementById('olympics'), {
   type: 'bar',
   data: {
    labels: ['1924', '1950', '1980', '2010', '2018'],
    datasets: [
    {
        label: 'Canada Total Medals',
        type: 'line',
        fill:  false,
        data: ['9', '37', '2', '91', '226'],
        borderColor: 'red',
        backgroundColor: 'red'
       },

       {
        label: 'Countries',
        data: ['10', '13', '19', '26', '92'],
        backgroundColor:'#f4c300'
       },

       {
         label: 'Sport Events',
         data: ['6', '4', '6', '7', '15'],
         backgroundColor: '#009f3d'
       }
    ]

   }

});

new Chart(document.getElementById('top_5'), {
    type: 'horizontalBar',
    data: {
        labels: ['BJOERNDALEN', 'DAEHLIE', 'EGOROVA', 'BJOERGEN', 'SKOBLIKOVA'],
        datasets: [
        {
            label: 'Best Athletes (Sort by Gold Medal)',
            data: ['13', '12', '9', '9', '6'],
            backgroundColor: 'gold'     
        }
    ]
    },
    options: {
    scales: {
        yAxes: [{
            display: true
        }],
        xAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
})
