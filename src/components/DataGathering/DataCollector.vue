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
  mounted () {
    axios
      .get('https://covid19.mathdro.id/api/confirmed')
      .then(response => response.data )
      .then(data => {
        var c=0
        for(var i=0;i<1000;i++){
          if(data[i].countryRegion=="India"){
            if (data[i].provinceState in this.labels){
              continue
            }
            else{
              this.labels.push(data[i].provinceState)
              this.deaths.push(data[i].active)
              this.confirmed.push(data[i].deaths)
              this.active.push(data[i].confirmed)
              c=c+1
              if(c==5){
                break
              }
            }
          }
          
        }
        console.log(this.labels)
        console.log(this.active)
        console.log(this.deaths)
        console.log(this.confirmed)
      })
      .catch(err => console.log(err))
  }    
   
}
</script>

<style scoped>

</style>