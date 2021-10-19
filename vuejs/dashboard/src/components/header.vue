<template>
  <header class="bg-gradient-to-b from-blue-600 to-green-500">
    <nav class="flex justify-evenly items-center w-full">
      <!-- <div class="menu-btn">
        <i class="text-white">mbtn</i>
      </div> -->
      <div class="logo flex justify-center items-center">
        <img id="pay-img" src="@/assets/SevenPay2x.png" alt="" />
      </div>
      <h1 class="text-center uppercase text-white">dashboard</h1>
      <div class="search-div flex justify-center items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search details"
          class="
            border-none
            rounded-br-0 rounded-tr-0 rounded-tl-2xl rounded-bl-2xl
            pl-3
            outline-none
            placeholder-blue-800
          "
          list="dropdown"
        />
        <datalist id="dropdown">
          <option value="lorem">ipsum</option>
          <option value="lorem">tekeh</option>
          <option value="lorem">set dolor</option>
        </datalist>
        <button
          class="
            bg-white
            rounded-tl-0 rounded-tr-2xl rounded-bl-0 rounded-br-2xl
            pr-2
          "
        >
          search
        </button>
      </div>
      <div class="profile flex justify-between items-center text-white">
        <img src="@/assets/avan.jpg" class="rounded-3xl h-1/2" alt="" />
        <i>users</i>
        <i>users</i>
        <i>users</i>
      </div>
    </nav>
  </header>
</template>
<script>
// import Button from "./button.vue";
export default {
  name: "Header",
  components: {
    // Button,
  },
};
</script>
<style lang="css" scoped>
header {
  width: 100vw;
  height: 15vh;
  margin: 0;
  padding: 0;
}
#pay-img {
  width: 100px;
  cursor: pointer;
}

nav {
  width: 100%;
  height: 100%;
}
.logo {
  height: 100%;
}
.profile {
  height: 100%;
}
.profile img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
}
.search-div input {
  width: 250px;
  height: 38px;
  font-size: 0.8em;
  padding-left: 20px;
  border-radius: 30px 0 0 30px;
}

.search-div button {
  width: 60px;
  height: 38px;
  font-size: 0.8em;
  border-radius: 0 30px 30px 0;
}
</style>