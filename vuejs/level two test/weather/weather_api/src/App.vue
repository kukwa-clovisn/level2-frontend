<template>
  <div class="content">
    <Weather />
  </div>
</template>

<script>
import Weather from "./components/weather.vue";

export default {
  name: "App",
  components: {
    Weather,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,100;1,200;1,300&display=swap");
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
}

.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
