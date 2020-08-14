<template>
    <div>
          <!-- <div v-for="value in results" :key="value">
                <p>Confirmed : {{value.value}}</p>
            </div>-->
                 <!-- <p v-if='value.provinceState=="Maharashtra"'>{{value.provinceState}} ,{{value.confirmed}},{{value.deaths}},{{value.recovered}}</p>-->
            
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
      .get('https://covid19.mathdro.id/api/confirmed')
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }    
   
}
</script>

<style scoped>

</style>