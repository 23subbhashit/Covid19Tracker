import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


new Chart(document.getElementById('my-chart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: '2018 Sales',
        data: [300, 700, 450, 750, 450]
      }
    ]
    // datasets : {
    //   label : '2018 Sales',
    //   data: [
    // { x: 0, y: 300 },
    // { x: 1, y: 700 },
    // { x: 2, y: 450 },
    // { x: 3, y: 750 },
    // { x: 4, y: 450 }
    //   ]
    // }
  }
});