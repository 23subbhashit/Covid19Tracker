<template>
  <div id="app" >
    <Header></Header>
    <Address></Address>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Address from '@/components/Footer/Address'
//import DataCollector from '@/components/Body/DataCollector'
export default {
  name: 'App',
  components: {
    Header : Header,
    Address : Address,
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
