<template>
<div>
    <br>
    <br>
    <div>
        <RecoveredBread></RecoveredBread>
        <br>
        <h2>Recovered</h2>
        <RecoveredLine></RecoveredLine>
        <br>
        <br>
        <RecoveredBar></RecoveredBar>
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
    components : {
        RecoveredLine,
        RecoveredBar,
        RecoveredBread,
    }
}
</script>