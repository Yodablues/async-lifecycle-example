<template>
  <div id="app">
    <Async/>
    <NonAsync/>
  </div>
</template>

<script>
import Async from "./components/Async";
import NonAsync from "./components/NonAsync";

export default {
  name: "App",
  components: {
    Async,
    NonAsync
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
