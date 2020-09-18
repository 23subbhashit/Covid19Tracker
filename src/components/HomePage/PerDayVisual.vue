<template>
<div data-aos="fade-right" data-aos-duration="3000">
<br/>
<br/>
<h2 style="font-weight: bold;">Per Day Cases</h2>
<br/>
<br/>
    <div class="m-3">
<div class="row w-100">
        <div class="col-md-4">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-eye" aria-hidden="true"></span></div>
                <div class="text-info text-center mt-3"><h4> Confimed </h4></div>
                <div class="text-info text-center mt-2"><h1>{{ Confirmed }}</h1></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-plus" aria-hidden="true"></span></div>
                <div class="text-success text-center mt-3"><h4> Recovered </h4></div>
                <div class="text-success text-center mt-2"><h1>{{ Recovered }}</h1></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-heart" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4> Deaths </h4></div>
                <div class="text-danger text-center mt-2"><h1>{{ Deaths }}</h1></div>
            </div>
        </div>
        
     </div>
</div>
</div>
</template>

<script>

const axios = require("axios");

export default {
    data : () => {
        return {
            Confirmed : null,
            Deaths : null,
            Recovered :null
        }
    },
    mounted () {
    axios
      .get('https://covid19.mathdro.id/api/')
      .then(response => {
          this.Confirmed = response.data.confirmed.value;
          this.Deaths = response.data.deaths.value;
          this.Recovered = response.data.recovered.value;
      })
      .catch(err => console.log(err))
  }   
}
</script>

<style scoped>
.my-card
{
    position:absolute;
    left:40%;
    top:-20px;
    border-radius:50%;
}
</style>