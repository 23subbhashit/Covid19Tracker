<template>
    <div>
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
export default {
    components : {
        CasesLine,
        CasesBar,
    }
}
</script>