window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  createGraph(ctx);
};

var xData = [
  18.654761904761905, 18.738095238095237, 18.82142857142857, 18.904761904761905,
  18.988095238095237, 19.071428571428573, 19.154761904761905,
  19.238095238095237, 19.321428571428573, 19.404761904761905,
  19.488095238095237, 19.571428571428573, 19.654761904761905,
  19.738095238095237, 19.821428571428573, 19.904761904761905,
  19.988095238095237, 20.071428571428573, 20.154761904761905,
  20.238095238095237,
];

var yData = [
  0, 11, 13, 14, 13, 16, 14, 17, 10, 13, 15, 14, 22, 26, 25, 25, 19, 24, 23, 24,
];

var myLine = null;

var config = {
  type: "line",
  data: {
    labels: xData, // Date Objects
    datasets: [
      {
        label: "My First dataset",
        data: yData,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Time Scale",
    },
    scales: {
      xAxes: [
        {
          type: "time",
          scaleLabel: {
            display: true,
            labelString: "Date",
          },
          ticks: {
            //callback: function (value, index, values) {
            //  return Math.floor(value).toFixed(0) + '.' + (((value - Math.floor(value)) * 12).toFixed(0));
            //},
            maxRotation: 0,
          },
        },
      ],
      yAxes: [
        {
          type: "linear",
          scaleLabel: {
            display: true,
            labelString: "value",
          },
        },
      ],
    },
    plugins: {
      zoom: {
        zoom: {
          enabled: true,
          drag: { animationDuration: 200 },
          mode: "x",
          speed: 0.05,
        },
      },
    },
  },
};

function resetZoom() {
  myLine.resetZoom();
}

function createGraph(ctx) {
  myLine = new window.Chart(ctx, config);
}
