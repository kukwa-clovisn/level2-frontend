<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Login />
    <div>this is the home component</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/login.vue";
export default {
  name: "Home",
  userStatus: [0, 1, 1, 0, 1, 1, 0],
  users: [
    {
      users: ["Jude", "Prince", "Henry"],
      amount: [2000, 8000, 50000],
    },
    {
      users: ["Kenry", "Loise", "Julius", "Sarah"],
      amount: [1000, -2000, -8000, 6000],
    },
    {
      users: ["Ashil", "Olive", "Nissi"],
      amount: [1000, 7000, 4000],
    },
    {
      users: ["Gerald", "Henry", "Diland", "Joe"],
      amount: [2000, 3000, 1000, 4000],
    },
  ],
  components: {
    Login,
  },
};
</script>
