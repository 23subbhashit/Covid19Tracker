<template>
  <div>
    <GmapMap
  :center="{lat: lat, lng: long}"
  :zoom="12"
  map-type-id="terrain"
  style=" height: 400px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
<br>
  </div>
</template>

<script>
export default {
  data : () =>{
    return{
      lat : 0,
      long : 0,
    }
  },
  mounted : function() {
    this.geolocation();
 },
 methods: {
    geolocation : function() {
      navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude,
          this.long = position.coords.longitude
      });
    }
}
  
}
</script>