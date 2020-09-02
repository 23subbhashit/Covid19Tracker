<template>
  <canvas ref="myChart" width="900px" height="500px"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
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
      type: 'pie',
      data: {
        labels: this.label,
        datasets: [
        {
            label: 'CASES',
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