<template>
    <div>
      
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data () {
    return {
      results : null,
      labels : [],
      deaths : [],
      confirmed : [],
      active :[],
    }
  },
  async created() {
      axios.get("https://corona.lmao.ninja/v2/jhucsse")
      //.then(data => data.Promise)
      .then(r => console.log(r["data"]))
}
}
</script>

<style scoped>

</style>