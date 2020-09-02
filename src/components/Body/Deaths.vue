<template>
<div>
    <br>
    <br>
    <div>
        <DeathsBread></DeathsBread>
        <hr/>
        <br>
        <h2>Deaths</h2>
        <div data-aos="fade-right" data-aos-duration="3000">
        <DeathsLine 
        :label="labels"
        :chart-data="deaths"        
        ></DeathsLine>
        </div>
        <br>
        <br>
        <div data-aos="fade-left" data-aos-duration="3000">
        <DeathsBar
        :label="labels"
        :chart-data="deaths" 
        ></DeathsBar>
        </div>
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
    async beforeMount() {
     await axios
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
              if(c==28){
                break
              }
            }
          }
          
        }
      })
  }
}
</script>