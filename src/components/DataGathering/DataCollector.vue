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
  const { data } = await axios.get("https://covid19.mathdro.id/api/confirmed");
  var c=0
  for(var i=0;i<1000;i++){
    if(data[i].countryRegion=="India"){
            if (data[i].provinceState in this.labels){
              continue
            }
            else{
              this.labels.push(data[i].provinceState)
              this.confirmed.push(data[i].confirmed)
              c=c+1
              if(c==5){
                break
              }
            }
          }
  }
console.log(this.labels)
}
}
</script>

<style scoped>

</style>