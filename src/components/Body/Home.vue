<template>
    <div>
        <Jumbo></Jumbo>
        <br>
        <br>
        <Bread></Bread>
        <PerDayVisual></PerDayVisual>
        <DataCollector></DataCollector>
        <About></About>
        <ProfileCards></ProfileCards>    
    </div>
</template>
<script>
import Jumbo from '@/components/HomePage/Jumbo'
import ProfileCards from '@/components/HomePage/ProfileCards'
import Bread from '@/components/HomePage/Breads/Bread'
import PerDayVisual from '@/components/HomePage/PerDayVisual'
import About from '@/components/HomePage/About'
import DataCollector from '@/components/DataGathering/DataCollector'
export default {   
    components : {
        ProfileCards,
        Bread,
        Jumbo,
        PerDayVisual,
        About,
        DataCollector,
    }
}
</script>