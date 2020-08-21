<template>
<div>
    <br>
    <br>
    <div>
        <RecoveredBread></RecoveredBread>
        <hr/>
        <br>
        <h2>ACTIVE</h2>
        <RecoveredLine
        :label="labels"
        :chart-data="active" 
        ></RecoveredLine>
        <br>
        <br>
        <RecoveredBar
        :label="labels"
        :chart-data="active" 
        ></RecoveredBar>
        <br>
        <br>
    </div>
</div>
</template>

<script>
const axios = require("axios")
import RecoveredLine from '../Visuals/RecoveredLine.vue'
import RecoveredBar from '@/components/Visuals/RecoveredBar'
import RecoveredBread from '@/components/HomePage/Breads/RecoveredBread'
export default {
     data : ()=> {
        return {
            labels : [],
            active : [],
        }
        
    },
    components : {
        RecoveredLine,
        RecoveredBar,
        RecoveredBread,
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
              this.active.push(data[i].active)
              c=c+1
              if(c==28){
                break
              }
            }
          }
          
        }
      })
      .catch(err => console.log(err))
  }    
}
</script>