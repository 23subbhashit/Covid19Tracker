<template>
  <canvas ref="myChart" width="900px" height="250px"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [
        {
            label: 'DEATHS',
            backgroundColor: 'rgba(144,238,144 , 0.9 )',
            data: this.chartData,
        }
        ]
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
  }
}
</script>