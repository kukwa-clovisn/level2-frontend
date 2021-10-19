<template>
  <Header />

  <Dashboard />

  <Footer />
</template>

<script>
import Header from "./components/header.vue";
import Dashboard from "./components/dashboard.vue";
// import Button from "./components/button.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Dashboard,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&family=Ubuntu:wght@300&display=swap");
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
