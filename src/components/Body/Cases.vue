<template>
<div>
    <br>
    <br>
    <div>
        <CaseBread></CaseBread>
        <hr/>
        <br>
        <h2>Cases</h2>
        <CasesLine></CasesLine>
        <br>
        <br>
        <CasesBar></CasesBar>
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
    components : {
        CasesLine,
        CasesBar,
        CaseBread
    }
}
</script>