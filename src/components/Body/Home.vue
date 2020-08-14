<template>
    <div>
        <Jumbo></Jumbo>
        <br>
        <br>
        <Bread></Bread>
        <PerDayVisual></PerDayVisual>
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
export default {   
    components : {
        ProfileCards,
        Bread,
        Jumbo,
        PerDayVisual,
        About,
    }
}
</script>