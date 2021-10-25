<template>
  <div class="container bg-gradient-to-r from-blue-500 to-green-500">
    <h1 class="text-center uppercase text-white p-5">random user api</h1>
    <div :class="{ color: active }" id="image">
      <img :src="img" alt="" />
    </div>
    <button
      class="rounded bg-white p-2 m-4 capitalize text-purple-800"
      @click="myFunction()"
    >
      {{ btnName }}
    </button>
    <div class="respond">
      <h1>{{ username }}</h1>
      <h1>{{ gender }}</h1>
      <h1>{{ dob }}</h1>
      <h1>{{ age }} years</h1>
      <div></div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";

// Vue.use(VueAxios, axios);
export default {
  name: "Weather",
  data() {
    return {
      btnName: "random user",
      username: "",
      img: "",
      dob: "",
      age: "",
      active: false,
      gender: "",
    };
  },
  mounted() {
    this.myFunction();
  },

  methods: {
    myFunction() {
      axios.get("https://randomuser.me/api/").then((res) => {
        console.log(res.data.results[0]);
        console.log(res.data.results[0].location.street.name);
        this.username = res.data.results[0].location.street.name;
        console.log(res.data.results[0].picture.medium);
        this.img = res.data.results[0].picture.medium;
        this.dob = res.data.results[0].dob.date;
        this.age = res.data.results[0].dob.age;
        this.gender = res.data.results[0].gender;
        if (this.gender === "female") {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 100vw;
  height: 100vw;
  background: linear-gradient(
    to bottom,
    rgb(0, 128, 49) 0%,
    rgb(136, 218, 245) 100%
  );
  margin: auto;
}
h1 {
  cursor: pointer;
  font-size: 25px;
}

#image {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid white;
  overflow: hidden;
}

#image img {
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
}

#image.color {
  border: 3px solid rgb(9, 168, 231);
}

button {
  min-width: 150px;
  transition: all 0.5s ease;
}

button:hover {
  background: tomato;
  color: white;
}

button:active {
  transform: scale(0.8);
}
.respond {
  width: 100%;
  height: 50vh;
  background: white;
  border-radius: 3px;
}
</style>

