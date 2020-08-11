<template>
    <div>
        <ul>
            <li v-for="value in results" :key="value">
                 {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data () {
    return {
      results : null
    }
  },
  mounted () {
    axios
      .get('https://api.covidindiatracker.com/state_data.json')
      .then(response => (this.results = response))
  }    
   
}
</script>

<style scoped>

</style>