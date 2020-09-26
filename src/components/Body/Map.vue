<template>
  <div>
  <br>
  <br>
  <MapBread></MapBread>
  <hr/>
  <!--<ForMap></ForMap>-->
  <MapVisual2></MapVisual2>
  </div>
</template>

<script>
import MapVisual2 from '@/components/MapComponents/MapVisual2'
import MapBread from '@/components/HomePage/Breads/MapBread'
//import ForMap from '@/components/DataGathering/ForMap'
export default {
  components :{
    MapVisual2,
    MapBread,
    //ForMap
  }
}
</script>