<template>
<div>
    <br>
    <br>
    <div>
        <CaseBread></CaseBread>
        <hr/>
        <br>
        <h2>Cases</h2>
        <CasesLine
        :label="labels"
        :chart-data="deaths" 
        ></CasesLine>
        <br>
        <br>
        <CasesBar
        :label="labels"
        :chart-data="deaths" 
        ></CasesBar>
        <br>
        <br>
    </div>
</div>
</template>

<script>
import CasesBar from '@/components/Visuals/CasesBar'
import CasesLine from '@/components/Visuals/CasesLine'
import CaseBread from '@/components/HomePage/Breads/CaseBread'
export default {
     data : ()=> {
        return {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            deaths : [300, 700, 450, 750, 450],
        }
        
    },
    components : {
        CasesLine,
        CasesBar,
        CaseBread
    }
}
</script>