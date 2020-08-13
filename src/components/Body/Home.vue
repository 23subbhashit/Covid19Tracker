<template>
    <div>
        <Jumbo></Jumbo>
        <Bread></Bread>
        <ProfileCards></ProfileCards>    
    </div>
</template>
<script>
import Jumbo from '@/components/HomePage/Jumbo'
import ProfileCards from '@/components/HomePage/ProfileCards'
import Bread from '@/components/HomePage/Bread'
export default {   
    components : {
        ProfileCards,
        Bread,
        Jumbo
    }
}
</script>