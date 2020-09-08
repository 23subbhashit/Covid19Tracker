<template>
  <div class="hello">
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-dark">
     <div class="container">
        <router-link class="navbar-brand" to="/"><span class="text-danger" style="font-size : 28px">
            COVID19<span class="text-warning" style="font-size : 23px">TRACKER</span>
          </span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"><span style="color : white">Home</span></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/cases" class="nav-link"><span style="color : white">Cases</span></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/deaths" class="nav-link"><span style="color : white">Deaths</span></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/recovered" class="nav-link"><span style="color : white">Active</span></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/map" class="nav-link"><span style="color : white">Map</span></router-link>
            </li>
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Started</a>
          </form>
        </div>

     </div>

</nav>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{}
};
</script>
<style scoped>
.nav-item{
  padding: 10px;
}
ul li .nav-link{
  padding: 20px;
}
ul li .nav-link:hover{
  background : #2C3E50;
  padding: 20px;
}
</style>


