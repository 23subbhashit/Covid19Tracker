<template>
    <div>
        <ul>
            <li v-for="img in results" :key="img">
                <div v-for="(img1,i1) in results" :key="img1">
                    {{img1}} {{i1}}
                </div>
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