/*
For more info about chart.js visit the website - 
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['A. Socialdemokratiet', 'V. Venstre, Danmarks Liberale Parti', 'O. Dansk Folkeparti', 'Ø. Enhedslisten - De Rød-Grønne', 'I. Liberal Alliance'],
        datasets: [{
            label: 'Folketingsvalg efter område, valgresultat og tid',
            backgroundColor: 'rgb(245, 100, 255)',
            borderColor: 'rgb(245, 100, 255)',
            data: [40383, 27002, 23294, 10470, 10034]
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Omsætning'
        }
    },
      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'blue'
            }
        }
        
});


/*
For more info about chart.js visit the website - 
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['A. Socialdemokratiet', 'V. Venstre, Danmarks Liberale Parti', 'O. Dansk Folkeparti', 'Ø. Enhedslisten - De Rød-Grønne', 'I. Liberal Alliance'],
        datasets: [{
            label: 'Folketingsvalg efter område, valgresultat og tid',
            backgroundColor: 'rgb(245, 100, 255)',
            borderColor: 'rgb(245, 100, 255)',
            data: [40383, 27002, 23294, 10470, 10034]
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Omsætning'
        }
    },
      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'blue'
            }
        }
        
});

/*
For more info about chart.js visit the website - 
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{
            label: 'Familiernes besiddelse af smartphones i hjemmet efter forbrugsart og tid',
            backgroundColor: 'rgb(100, 100, 100)',
            borderColor: 'rgb(100, 100, 100)',
            data: [0, 33, 50, 63, 73, 77, 83, 84, 88]
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Forbrug'
        }
    },
      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'blue'
            }
        }
        
});

	var hiringSurveyData = {
	    labels:  ["A. Socialdemokratiet", "V. Venstre, Danmarks Liberale Parti", "O. Dansk Folkeparti", "Ø. Enhedslisten - De Rød-Grønne", "I. Liberal Alliance"],
	    datasets: [{
	        label: "Folketingsvalg efter område, valgresultat og tid 2011",
	        backgroundColor: "rgb(10, 199, 191)",
	        borderColor: "rgb(10, 199, 191)",
	        borderWidth: 1,
	        data: [40358, 30368, 13549, 7993, 5906],
	    }, {
	        label: 'Folketingsvalg efter område, valgresultat og tid 2015',
	        backgroundColor: "rgb(220, 220, 220)",
	        borderColor: "rgb(220, 220, 220)",
	        borderWidth: 1,
	        data: [40383, 27002, 23294, 10470, 10034],
	    }]
	};

    var hiringSurveyGraph = document.getElementById("hiring-surveys").getContext("2d");

    var hiringSurveyBarGraph = new Chart(hiringSurveyGraph, {
        type: 'bar',
        data: hiringSurveyData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            scales: {
		        yAxes: [{
		            ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 1,
                        max: 45000
            		}
        		}]
    		},
		    animation: false,
        }
    });