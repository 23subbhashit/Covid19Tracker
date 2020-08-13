<template>
    <div>
        <DeathsBread></DeathsBread>
        <br>
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
import DeathsBread from '@/components/HomePage/DeathsBread'
export default {
    components : {
        DeathsBar,
        DeathsLine,
        DeathsBread,
    }
}
</script>