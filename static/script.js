//line

$(function () {
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [{
label: "My First dataset",
data: [65, 59, 80, 81, 56, 55, 40],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My Second dataset",
data: [28, 48, 40, 19, 86, 27, 90],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});
})

//radar

$(function(){
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
type: 'radar',
data: {
labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
datasets: [{
label: "My First dataset",
data: [65, 59, 90, 81, 56, 55, 40],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My Second dataset",
data: [28, 48, 40, 19, 96, 27, 100],
backgroundColor: [
'rgba(0, 250, 220, .2)',
],
borderColor: [
'rgba(0, 213, 132, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});
})


//bar
$(function (){

var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
type: 'bar',
data: {
labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
})


$(function () {
new Chart(document.getElementById("horizontalBar"), {
"type": "horizontalBar",
"data": {
"labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
"datasets": [{
"label": "My First Dataset",
"data": [22, 33, 55, 12, 86, 23, 14],
"fill": false,
"backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
"rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
"rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
],
"borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
"rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
],
"borderWidth": 1
}]
},
"options": {
"scales": {
"xAxes": [{
"ticks": {
"beginAtZero": true
}
}]
}
}
});
})

//polar

$(function (){
var ctxPA = document.getElementById("polarChart").getContext('2d');
var myPolarChart = new Chart(ctxPA, {
type: 'polarArea',
data: {
labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
datasets: [{
data: [300, 50, 100, 40, 120],
backgroundColor: ["rgba(219, 0, 0, 0.1)", "rgba(0, 165, 2, 0.1)", "rgba(255, 195, 15, 0.2)",
"rgba(55, 59, 66, 0.1)", "rgba(0, 0, 0, 0.3)"
],
hoverBackgroundColor: ["rgba(219, 0, 0, 0.2)", "rgba(0, 165, 2, 0.2)",
"rgba(255, 195, 15, 0.3)", "rgba(55, 59, 66, 0.1)", "rgba(0, 0, 0, 0.4)"
]
}]
},
options: {
responsive: true
}
});
})

//pie

$(function (){
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
datasets: [{
data: [300, 50, 100, 40, 120],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
}]
},
options: {
responsive: true
}
});
})

//doughnut

$(function () {

var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {
labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
datasets: [{
data: [300, 50, 100, 40, 120],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
}]
},
options: {
responsive: true
}
});
})

$(function(){
var ctxBc = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(ctxBc, {
type: 'bubble',
data: {
datasets: [{
label: 'John',
data: [{
x: 3,
y: 7,
r: 10
}],
backgroundColor: "#ff6384",
hoverBackgroundColor: "#ff6384"
}, {
label: 'Peter',
data: [{
x: 5,
y: 7,
r: 10
}],
backgroundColor: "#44e4ee",
hoverBackgroundColor: "#44e4ee"
}, {
label: 'Donald',
data: [{
x: 7,
y: 7,
r: 10
}],
backgroundColor: "#62088A",
hoverBackgroundColor: "#62088A"
}]
}
})
})

$(function () {
var ctxSc = document.getElementById('scatterChart').getContext('2d');
var scatterData = {
datasets: [{
borderColor: 'rgba(99,0,125, .2)',
backgroundColor: 'rgba(99,0,125, .5)',
label: 'V(node2)',
data: [{
x: 1,
y: -1.711e-2,
}, {
x: 1.26,
y: -2.708e-2,
}, {
x: 1.58,
y: -4.285e-2,
}, {
x: 2.0,
y: -6.772e-2,
}, {
x: 2.51,
y: -1.068e-1,
}, {
x: 3.16,
y: -1.681e-1,
}, {
x: 3.98,
y: -2.635e-1,
}, {
x: 5.01,
y: -4.106e-1,
}, {
x: 6.31,
y: -6.339e-1,
}, {
x: 7.94,
y: -9.659e-1,
}, {
x: 10.00,
y: -1.445,
}, {
x: 12.6,
y: -2.110,
}, {
x: 15.8,
y: -2.992,
}, {
x: 20.0,
y: -4.102,
}, {
x: 25.1,
y: -5.429,
}, {
x: 31.6,
y: -6.944,
}, {
x: 39.8,
y: -8.607,
}, {
x: 50.1,
y: -1.038e1,
}, {
x: 63.1,
y: -1.223e1,
}, {
x: 79.4,
y: -1.413e1,
}, {
x: 100.00,
y: -1.607e1,
}, {
x: 126,
y: -1.803e1,
}, {
x: 158,
y: -2e1,
}, {
x: 200,
y: -2.199e1,
}, {
x: 251,
y: -2.398e1,
}, {
x: 316,
y: -2.597e1,
}, {
x: 398,
y: -2.797e1,
}, {
x: 501,
y: -2.996e1,
}, {
x: 631,
y: -3.196e1,
}, {
x: 794,
y: -3.396e1,
}, {
x: 1000,
y: -3.596e1,
}]
}]
}

var config1 = new Chart.Scatter(ctxSc, {
data: scatterData,
options: {
title: {
display: true,
text: 'Scatter Chart - Logarithmic X-Axis'
},
scales: {
xAxes: [{
type: 'logarithmic',
position: 'bottom',
ticks: {
userCallback: function (tick) {
var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
if (remain === 1 || remain === 2 || remain === 5) {
return tick.toString() + 'Hz';
}
return '';
},
},
scaleLabel: {
labelString: 'Frequency',
display: true,
}
}],
yAxes: [{
type: 'linear',
ticks: {
userCallback: function (tick) {
return tick.toString() + 'dB';
}
},
scaleLabel: {
labelString: 'Voltage',
display: true
}
}]
}
}
});
})

$(function(){
    var ctxP = document.getElementById("labelChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  plugins: [ChartDataLabels],
  type: 'pie',
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [{
      data: [210, 130, 120, 160, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        padding: 20,
        boxWidth: 10
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        color: 'white',
        labels: {
          title: {
            font: {
              size: '16'
            }
          }
        }
      }
    }
  }
});
})