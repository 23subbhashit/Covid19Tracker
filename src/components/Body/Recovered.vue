<template>
    <div>
        <h2>Recovered</h2>
        <RecoveredLine></RecoveredLine>
        <br>
        <br>
        <RecoveredBar></RecoveredBar>
        <br>
        <br>
    </div>
</template>

<script>
import RecoveredLine from '../Visuals/RecoveredLine.vue'
import RecoveredBar from '@/components/Visuals/RecoveredBar'
export default {
    components : {
        RecoveredLine,
        RecoveredBar,
    }
}
</script>