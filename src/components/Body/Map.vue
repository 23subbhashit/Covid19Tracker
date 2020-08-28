<template>
  <div>
  <br>
  <br>
  <MapBread></MapBread>
  <hr/>
  <MapVisual></MapVisual>
  </div>
</template>

<script>
import MapVisual from '@/components/MapComponents/MapVisual'
import MapBread from '@/components/HomePage/Breads/MapBread'
export default {
  components :{
    MapVisual,
    MapBread
  }
}
</script>