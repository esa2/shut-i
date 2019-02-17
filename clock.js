var charEl = document.getElementById('doughnut-chart');
var myChart = new Chart(charEl, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [
      {
        label: 'labe here',
        // backgroundColor: ['#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#00ff00', '#00ff00', '#00ff00', '#ffff00', '#ff0000', '#ff0000'],
        backgroundColor: [],
        borderColor: ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'],
        data: [1,1,1,1,1,1,1,1,1,1,1,1]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: ''
    }
  }
});

var chartStart = parseInt(localStorage.chartBedTime);
var chartHours = parseInt(localStorage.chartHoursNeeded);
var chartLength = 12;
if(chartStart === 12) {
  chartStart = 0; // Start at index 0
}
// This if sets hour preceeding sleep to yellow
if(chartStart === 0) {
  myChart.data.datasets[0].backgroundColor[11] = '#ff0000';
  chartLength--;
} else {
  myChart.data.datasets[0].backgroundColor[chartStart - 1] = '#ff0000';
  chartLength--;
}
var i = 0;
while (i < chartHours) {
  if(chartStart === 12) {
    chartStart = 0;
  }
  myChart.data.datasets[0].backgroundColor[chartStart] = '#0d0a57';
  chartStart++;
  chartLength--;
  i++;
}
while (chartLength > 0) {
  if(chartStart === 12) {
    chartStart = 0;
  }
  myChart.data.datasets[0].backgroundColor[chartStart] = '#42ab29';
  chartStart++;
  chartLength--;
}
myChart.update();

function initLocalClocks() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
      elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
      }
    }
  }
}
initLocalClocks();
