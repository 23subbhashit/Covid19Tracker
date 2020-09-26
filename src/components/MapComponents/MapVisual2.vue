<template>
<div>
<ul>
        <li v-for="(l,i) in latlong" :key="i">
            {{l}}
        </li>
      </ul>
  <div style="height: 80vh">
    <LMap  @ready="onReady" @locationfound="onLocationFound" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker :lat-lng="[13.1333682,77.5651881]"></LMarker>
      <LMarker :lat-lng="[13.1340669,77.56707]"></LMarker>
      <LMarker :lat-lng="[13.1348904,77.5643231]"></LMarker>
      <LMarker :lat-lng="[13.1367826,77.5711133]"></LMarker>
      
      
    </LMap>
    
  </div>
  <br/>
    <br/>
    
  </div>

</template>
      
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
const axios = require("axios");
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 4,
      center: [13.1367826,77.5711133],
      bounds: null,
      results : null,
      country : [],
      latlong : [],
      confirmed : [],
    };
  },
  methods: {
onReady (mapObject) {
  mapObject.locate();
},
onLocationFound(location){
  console.log(location)
}
},
created() {
    axios.get("https://corona.lmao.ninja/v2/jhucsse")
    .then(r => r["data"])
    .then(data => {
        for(var i=0;i<742;i++){
            if(data[i].country in this.country){
                continue
            }
            else{
                
                if(data[i].coordinates["latitude"]!=null && data[i].coordinates["longitude"]!=null){
                    var a=[]
                    this.country.push(data[i].country)
                    a.push(parseFloat(data[i].coordinates["latitude"]))
                    a.push(parseFloat(data[i].coordinates["longitude"]))
                    this.confirmed.push(data[i].stats["confirmed"])
                    console.log(data[i].country)
                    console.log(data[i].coordinates["latitude"])
                    console.log(data[i].coordinates["longitude"])
                    console.log(data[i].stats["confirmed"])
                    this.latlong.push(a)
                }
            }
        

  }
  console.log(this.latlong)
    }
      
  )
}
};
</script>