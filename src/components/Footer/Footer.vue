<template>
<div>
<footer class="page-footer font-small mdb-color dark-3 pt-4">
  <div class="container text-center text-md-left">
    <div class="row">
      <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
        <h5 class="font-weight-bold text-uppercase mb-4">Links</h5>

        <ul class="list-unstyled">
          <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cases" class="nav-link">Cases</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/deaths" class="nav-link">Deaths</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recovered" class="nav-link">Active</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/map" class="nav-link">Map</router-link>
            </li>
        </ul>

      </div>

      <hr class="clearfix w-100 d-md-none">
      <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
        <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

        <ul class="list-unstyled">
          <li>
            <p>
              <i class="fa fa-home mr-3"></i>BMSIT&M , Yelahanka , Banglore</p>
          </li>
          <li>
            <p>
              <i class="fa fa-user mr-3"></i>subbhashitmukherjee@gmail.com</p>
          </li>
          <li>
            <p>
              <i class="fa fa-phone mr-3"></i> + 91 9140927375</p>
          </li>
        </ul>

      </div>

      <hr class="clearfix w-100 d-md-none">
      <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
        <h5 class="font-weight-bold text-uppercase mb-4">Follow Me</h5>
        
        <a href="https://www.facebook.com/subbhashit.mukherjee" class="btn btn-facebook"><i class="fa fa-facebook fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/subbhashit-mukherjee-71849a148/" class="btn btn-linkedin"><i class="fa fa-linkedin fa-lg"></i></a>
        <a href="https://twitter.com/SMukhkherjee" class="btn btn-twitter"><i class="fa fa-twitter fa-lg"></i></a>
        <a href="https://github.com/23subbhashit" class="btn btn-google"><i class="fa fa-github fa-lg"></i></a>
  

      </div>

    </div>

  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://23subbhashit.github.io/">23SUBBHASHIT</a>
  </div>

</footer>
</div>
</template>

<style scoped>
ul li router-link:hover {
  background-color: aqua;
}

</style>

