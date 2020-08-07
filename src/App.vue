<template>
  <div id="app" >
    <Navbar></Navbar>
    <Header></Header>
    <h2>COVID19 CASES</h2>
    <DataVisual></DataVisual>

    <h2>DEATHS</h2>
    <DataVisual></DataVisual>
    
    <h2>RECOVERED</h2>
    <DataVisual></DataVisual>
    <Address></Address>
  </div>
</template>

<script>
//import Header from './components/Header/Header'
import Address from '@/components/Footer/Address'
//import DataCollector from '@/components/Body/DataCollector'
import DataVisual from '@/components/Visuals/DataVisual'
import Navbar from '@/components/Header/Navbar'

export default {
  name: 'App',
  components: {
    Address,
    DataVisual,
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
