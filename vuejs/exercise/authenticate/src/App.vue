<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Parent @sound="show()" />
  <!-- <Child :list="items[Math.floor(Math.random() * items.length)].name" /> -->
  <!-- <Child :list="this.item" /> -->
  <!-- <Child :list="items.email" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Parent from "@/components/Parent.vue";
// import Child from "@/components/Child.vue";

export default {
  name: "App",
  // item: "",
  components: {
    // HelloWorld
    Parent,
    // Child,
  },
  emits: ["work"],
  data() {
    return {
      item: "",
      items: [
        {
          name: localStorage.getItem("try"),
          email: " dkdflkflkdfl.com",
        },
        // {
        //   name: "joybright",
        //   email: "dfklfkdf.com",
        // },
        // {
        //   name: "felixrich",
        //   email: "klklkfs.com",
        // },
      ],
    };
  },
  methods: {
    show() {
      let arr = {};
      this.$emit("work");
      for (let i = 0; i < this.items.length; i++) {
        arr.name = localStorage.getItem("try");
        // this.item = this.items.indexOf(this.items.length).name;
        this.item += arr.name;
        // for (let i = 0; i <= this.items.length; i++) {
        //   this.item = this.items[i].name;
        // }
      }
      alert(this.item);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
