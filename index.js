document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "bar",
    },
    title: {
      text: "Fruit Consumption",
    },
    xAxis: {
      categories: ["Blueberries", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit consooooomed",
      },
    },
    series: [
      {
        name: "Jane",
        data: [100, 20, 41],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
  });
});
