<template>
  <div id="app" >
    
    <Nav></Nav>
      <br>
      <br>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Header/Nav'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
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
