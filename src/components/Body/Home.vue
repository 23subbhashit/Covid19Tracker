<template>
    <div>
        <Jumbo></Jumbo>
        <Bread></Bread>
        <PerDayVisual></PerDayVisual>
        <ProfileCards></ProfileCards>    
    </div>
</template>
<script>
import Jumbo from '@/components/HomePage/Jumbo'
import ProfileCards from '@/components/HomePage/ProfileCards'
import Bread from '@/components/HomePage/Breads/Bread'
import PerDayVisual from '@/components/HomePage/PerDayVisual'
export default {   
    components : {
        ProfileCards,
        Bread,
        Jumbo,
        PerDayVisual,
    }
}
</script>