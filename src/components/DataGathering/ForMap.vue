<template>
    <div>
      {{ country }}
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data () {
    return {
      results : null,
      country : [],
      lat : [],
      long : [],
      confirmed : [],
    }
  },
  created() {
      axios.get("https://corona.lmao.ninja/v2/jhucsse")
      //.then(data => data.Promise)
    .then(r => r["data"])
    .then(data => {
        for(var i=0;i<742;i++){
            if(data[i].country in this.country){
                continue
            }
            else{
                
                if(data[i].coordinates["latitude"]!=null && data[i].coordinates["longitude"]!=null){
                    this.country.push(data[i].country)
                    this.lat.push(data[i].coordinates["latitude"])
                    this.long.push(data[i].coordinates["longitude"])
                    this.confirmed.push(data[i].stats["confirmed"])
                    console.log(data[i].country)
                    console.log(data[i].coordinates["latitude"])
                    console.log(data[i].coordinates["longitude"])
                    console.log(data[i].stats["confirmed"])
                    //stats,confirmed,deaths,recovered
                    // console.log(data[i])
                }
                
                
                // this.lat.push()
                // this.long.push()
            }
        // console.log(this.country.length)
        

  }
    }
      
  )
}
}
</script>

<style scoped>

</style>