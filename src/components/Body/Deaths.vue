<template>
    <div>
        <h2>Deaths</h2>
        <DeathsLine></DeathsLine>
        <br>
        <br>
        <DeathsBar></DeathsBar>
        <br>
        <br>
    </div>
</template>

<script>
import DeathsBar from '@/components/Visuals/DeathsBar'
import DeathsLine from '@/components/Visuals/DeathsLine'
export default {
    components : {
        DeathsBar,
        DeathsLine,
    }
}
</script>