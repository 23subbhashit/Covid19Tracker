<template>
  <div id="app" >
    
    <Nav></Nav>
      <br>
      <br>
      <router-view></router-view>
    <Footer1></Footer1>
  </div>
</template>

<script>
import Nav from '@/components/Header/Nav'
import Footer1 from '@/components/Footer/Footer1'

export default {
  name: 'App',
  components: {
    Nav,
    Footer1,
  }   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.jumbotron{
  background-color: aqua;
}
</style>
