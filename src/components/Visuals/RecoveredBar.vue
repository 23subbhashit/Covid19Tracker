<template>
  <canvas ref="myChart" width="900px" height="250px"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'monthly-sales-chart',
  mounted() {
    new Chart(this.$refs.myChart, {
     type: 'bar',
  data: {
    labels: [0, 1, 2, 3, 4, 5],
    datasets: [{
      label: 'Barplot',
      data: [12, 19, 3, 5, 20 , 25],
      backgroundColor: 'rgba(144,238,144 , 0.9 )',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.30,
      }, {
        display: true,
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
    });
  }
}
</script>