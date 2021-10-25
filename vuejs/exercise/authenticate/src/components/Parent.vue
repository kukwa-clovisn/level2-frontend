<template>
  <!-- <div>this is the parent</div>
  <input
    type="text"
    v-model="val"
    placeholder="say something..."
    class="
      bg-blue-200
      text-black
      rounded-2xl
      outline-none
      placeholder-purple-800
      p-3
      m-3
      w-72
    "
  />
  <button
    @click="set()"
    class="rounded bg-purple-600 text-white capitalize p-2 m-3"
  >
    click me
  </button> -->

  <div
    class="
      weather
      bg-gradient-to-t
      from-black
      text-white
      via-gray-800
      to-black
      p-3
    "
  >
    <div class="input p-4">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="serch with country..."
        class="bg-white text-black capitalize"
      />
      <button class="btn bg-white text-purple-500 capitalize">search</button>
    </div>
    <!-- {{ weather.list[0].main }} -->
    <li>{{ weather.name }}</li>
    <li>{{ weather.id }}</li>
    <li>{{ weather.country }}</li>
  </div>
  <div>
    <ul>
      <li class="bg-blue-300 text-white uppercase">
        <!-- current pressure : {{ weather.list[0].main.pressure }} -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Parent",
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c1dd6294b37cac85f43c6bcdb2e3f7a2"
      )
      .then((res) => {
        this.weather = res.data.city;

        console.log(res);
      })
      .catch((err) => console.error(err));
  },

  data() {
    return {
      database: [],
      val: "",
      weather: "",
      // getInfo: localStorage.getItem("try"),
    };
  },

  // emits: ["sound"],
  methods: {
    // set() {
    //   console.log(this.database);
    //   if (this.val !== "") {
    //     if (this.getInfo == null) {
    //       this.database = [];
    //     } else {
    //       this.database = JSON.parse(this.getInfo);
    //     }
    //     console.log(this.database);
    //     localStorage.setItem("try", JSON.stringify(this.database));
    //     this.$emit("sound");
    //     this.val = "";
    //   } else {
    //     alert("write something please....");
    //   }
    // },
  },
};
</script>

<style lang="css">
.weather {
  width: 100%;
  height: 100vh;
  padding: 10px;
}

.input {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#search {
  width: 50%;
  height: 50px;
  padding: 5px 20px;
  outline: none;
  border: none;
  border-radius: 30px 0 0 30px;
}
.btn {
  border: none;
  border-radius: 0 30px 30px 0;
  background: white;
  height: 50px;
}

li {
  list-style-type: none;
  width: 20%;
  height: 100px;
  border: 1px solid white;
}
button {
  min-width: 100px;
  transition: all 0.3s ease;
}
button:active {
  transform: scale(0.8);
}
</style>