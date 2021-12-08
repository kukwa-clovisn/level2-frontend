<template>
  <HelloWorld />
  <br />
  <br />
  <Weather />
  <div class="space"></div>
  <Footer />
</template>

<script>
import Weather from "./components/weather.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Weather,
    Footer,
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
  background: linear-gradient(
    to bottom,
    rgb(0, 128, 49) 0%,
    rgb(136, 218, 245) 100%
  );
  background-attachment: fixed;
}

.space {
  width: 100%;
  height: 20vh;
  background: inherit;
}
</style>
