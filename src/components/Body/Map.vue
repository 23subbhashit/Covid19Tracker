<template>
  <div>
  <br>
  <br>
  <MapBread></MapBread>
  <hr/>
  <ForMap></ForMap>
  <MapVisual></MapVisual>
  </div>
</template>

<script>
import MapVisual from '@/components/MapComponents/MapVisual'
import MapBread from '@/components/HomePage/Breads/MapBread'
import ForMap from '@/components/DataGathering/ForMap'
export default {
  components :{
    MapVisual,
    MapBread,
    ForMap
  }
}
</script>