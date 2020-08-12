<template>
    <div>
        <ul>
            <li v-for="value in results" :key="value">
                <p>{{value.value}}</p>
                 <!-- <p v-if='value.provinceState=="Maharashtra"'>{{value.provinceState}} ,{{value.confirmed}},{{value.deaths}},{{value.recovered}}</p>-->
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
      .get('https://covid19.mathdro.id/api/')
      .then(response => this.results = response.data)
      .catch(err => console.log(err))
  }    
   
}
</script>

<style scoped>

</style>