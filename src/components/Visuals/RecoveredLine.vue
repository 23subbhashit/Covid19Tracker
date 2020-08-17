<template>
  <canvas ref="myChart" width="900px" height="250px"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'monthly-sales-chart',
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    },
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: 'line',
      data: {
        labels: this.label,
        datasets: [
        {
            label: 'ACTIVE',
            borderColor: 'rgba(245, 229, 27, 1)',
            backgroundColor: 'rgba(255, 236, 139,0.2)',
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