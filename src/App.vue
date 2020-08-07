<template>
  <div id="app" >
    <Navbar></Navbar>
    <Header></Header>

    <br>
    <br>

    <h2>COVID19 CASES</h2>
    <Lineplot></Lineplot>
    <Barplot></Barplot>

    <br>
    <br>

    <h2>DEATHS</h2>
    <Lineplot></Lineplot>
    <Barplot></Barplot>

    <br>
    <br>
    
    <h2>RECOVERED</h2>
    <Lineplot></Lineplot>
    <Barplot></Barplot>

    <br>
    <br>
    
    <Address></Address>
  </div>
</template>

<script>
import Address from '@/components/Footer/Address'
import Navbar from '@/components/Header/Navbar'
import Lineplot from '@/components/Visuals/Lineplot'
import Barplot from '@/components/Visuals/Barplot'

export default {
  name: 'App',
  components: {
    Address,
    Lineplot,
    Barplot,
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
