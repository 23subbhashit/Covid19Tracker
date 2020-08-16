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
//const axios = require("axios")
import DeathsBar from '@/components/Visuals/DeathsBar'
import DeathsLine from '@/components/Visuals/DeathsLine'
import DeathsBread from '@/components/HomePage/Breads/DeathsBread'
export default {
    data : ()=> {
        return {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            deaths : [300, 700, 450, 750, 450],
        }
        
    },
    components : {
        DeathsBar,
        DeathsLine,
        DeathsBread,
    },
}
</script>