<template>
  <div id="app" >
    
    <Navbar></Navbar>
      <router-view></router-view>
    <Address></Address>
  </div>
</template>

<script>
import Address from '@/components/Footer/Address'
import Navbar from '@/components/Header/Navbar'

export default {
  name: 'App',
  components: {
    Address,
    Navbar,
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
