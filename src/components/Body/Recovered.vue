<template>
<div>
    <br>
    <br>
    <div>
        <RecoveredBread></RecoveredBread>
        <hr/>
        <br>
        <h2>Recovered</h2>
        <RecoveredLine
        :label="labels"
        :chart-data="deaths" 
        ></RecoveredLine>
        <br>
        <br>
        <RecoveredBar
        :label="labels"
        :chart-data="deaths" 
        ></RecoveredBar>
        <br>
        <br>
    </div>
</div>
</template>

<script>
import RecoveredLine from '../Visuals/RecoveredLine.vue'
import RecoveredBar from '@/components/Visuals/RecoveredBar'
import RecoveredBread from '@/components/HomePage/Breads/RecoveredBread'
export default {
     data : ()=> {
        return {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            deaths : [300, 700, 450, 750, 450],
        }
        
    },
    components : {
        RecoveredLine,
        RecoveredBar,
        RecoveredBread,
    }
}
</script>