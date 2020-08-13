<template>
    <div>
        <CaseBread></CaseBread>
        <br>
        <h2>Cases</h2>
        <CasesLine></CasesLine>
        <br>
        <br>
        <CasesBar></CasesBar>
        <br>
        <br>
    </div>
</template>

<script>
import CasesBar from '@/components/Visuals/CasesBar'
import CasesLine from '@/components/Visuals/CasesLine'
import CaseBread from '@/components/HomePage/CaseBread'
export default {
    components : {
        CasesLine,
        CasesBar,
        CaseBread
    }
}
</script>