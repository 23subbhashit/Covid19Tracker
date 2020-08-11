<template>
    <div>
        <h2>Deaths</h2>
        <Lineplot></Lineplot>
        <Barplot></Barplot>
    </div>
</template>

<script>
import Lineplot from '@/components/Visuals/Lineplot'
import Barplot from '@/components/Visuals/Barplot'
export default {
    components : {
        Lineplot,
        Barplot,
    }
}
</script>