<template>
    <div>
    {{ results }}
  <canvas ref="myChart" width="900px" height="250px"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
const axios = require("axios");
export default {
  name: 'monthly-sales-chart',
  data : () => {
      return{
          results : null
      }
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
        {
            label: '2020 Cases Before April',
            borderColor: 'rgba(245, 229, 27, 1)',
            backgroundColor: 'rgba(255, 236, 139,0.2)',
            data: [300, 700, 450, 750, 450]
        },
        {
            label: '2020 Cases After April',
            borderColor: 'rgba(255, 56, 96, 0.5)',
            backgroundColor: 'rgba(255, 56, 96, 0.1)',
            data: [600, 550, 750, 250, 700]
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
    axios
      .get('https://covid19.mathdro.id/api/')
      .then(response => this.results = response.data.confirmed.value)
      .catch(err => console.log(err))
  }
}
</script>