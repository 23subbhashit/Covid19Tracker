<template>
  <div>
    <GmapMap
  :center="{lat: 0, lng: 0}"
  :zoom="5"
  map-type-id="terrain"
  style=" height: 400px"
>
  
</GmapMap>
<br>
  </div>
</template>

<script>
export default {
  data : () =>{
    return{
      lat : null,
      long : null,
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