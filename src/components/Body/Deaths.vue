<template>
<div>
    <br>
    <br>
    <div>
        <DeathsBread></DeathsBread>
        <hr/>
        <br>
        <h2>Deaths</h2>
        <DeathsLine 
        :label="labels"
        :chart-data="deaths"        
        ></DeathsLine>
        <br>
        <br>
        <DeathsBar
        :label="labels"
        :chart-data="deaths" 
        ></DeathsBar>
        <br>
        <br>
    </div>
</div>
</template>

<script>
const axios = require("axios")
import DeathsBar from '@/components/Visuals/DeathsBar'
import DeathsLine from '@/components/Visuals/DeathsLine'
import DeathsBread from '@/components/HomePage/Breads/DeathsBread'
export default {
    data : ()=> {
        return {
            labels : [],
            deaths : [],
        }
        
    },
    components : {
        DeathsBar,
        DeathsLine,
        DeathsBread,
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
              this.deaths.push(data[i].deaths)
              c=c+1
              if(c==5){
                break
              }
            }
          }
          
        }
      })
  }
}
</script>