<template>
  <div class="m-3">
    <div class="wrap-home-resources">

  <!-- <script src="./home-resources.js" inline></script> -->

  <div class="home-resources-header">
    <h1>
      Lorem ipsum dolor.
    </h1>
    <h2>
      Lorem ipsum dolor.
    </h2>
  </div>

  <div class="home-resources-content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="carousel-home-resources" class="carousel-home-resources">
            <carousel-3d 
                         :perspective="30"
                         :border="0"
                         :width="585"
                         :height="370"
                         :controls-visible="true"
                         :space="500"
                         :clickable="true">

              <slide :index="0">
                <img src="https://loremflickr.com/585/370/paris/?random=1" />
              </slide>

              <slide :index="1">
                <img src="https://loremflickr.com/585/370/paris/?random=2" />
              </slide>

              <slide :index="2">
                <img src="https://loremflickr.com/585/370/paris/?random=3" />
              </slide>

            </carousel-3d>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    
  </div>
</template>
<script>
export default {
  el: '#carousel-home-resources',
  
}
</script>>

<style scoped>
.carousel-home-resources .left-1 {
  transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}
.carousel-home-resources .right-1 {
  transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
}

</style>>