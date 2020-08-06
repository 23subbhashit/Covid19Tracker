<template>
  <div id="app" >
    <Header></Header>
    <DataVisual></DataVisual>
    <Address></Address>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Address from '@/components/Footer/Address'
//import DataCollector from '@/components/Body/DataCollector'
import DataVisual from '@/components/Visuals/DataVisual'
export default {
  name: 'App',
  components: {
    Header,
    Address,
    DataVisual,
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
