<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="app">
    <Child
      v-if="sign_in"
      btnName="sign in as a new member"
      @click="sign()"
      class="btn btn-danger rounded"
    />
    <Parent v-if="done" @toLocalStorage="getData()" />
    <Child
      v-if="checked"
      btnName="check out registered members"
      class="btn btn-success rounded"
      @click="checkMembers()"
    />
    <Child
      v-if="clicked"
      btnName="show list of registered members"
      @click="showList()"
      class="btn btn-success rounded"
    />
    <Child
      v-if="hide"
      btnName="hide list "
      @click="hideList()"
      class="btn btn-success rounded"
    />
    <Accountlisting v-if="sign_in" :register="this.serve" />
    <Accountupdate v-if="sign_in" />
  </div>
</template>

<script>
import Parent from "@/components/parent.vue";
import Accountlisting from "@/components/Accountlisting.vue";
import Accountupdate from "@/components/Accountupdate.vue";
import Child from "@/components/child.vue";

export default {
  name: "App",
  components: {
    Accountlisting,
    Accountupdate,
    Parent,
    Child,
  },
  data() {
    return {
      checked: true,
      clicked: false,
      hide: false,
      done: true,
      sign_in: false,

      serve: [],
      serverData: localStorage.getItem("server"),
      pushData: [],
    };
  },
  methods: {
    checkMembers() {
      this.done = false;
      this.sign_in = true;
      this.hide = false;
      this.clicked = true;
      this.checked = false;
    },
    showList() {
      this.serve = JSON.parse(localStorage.getItem("server"));
      this.clicked = false;
      this.hide = true;
    },
    hideList() {
      this.serve = !this.serve;
      this.clicked = true;
      this.hide = false;
    },
    getData() {
      this.sendData();
      this.done = false;
      this.sign_in = true;
      this.hide = false;
      this.clicked = true;
      this.checked = false;
    },
    sign() {
      this.done = true;
      this.sign_in = false;
      this.hide = false;
      this.checked = true;
      this.clicked = false;
    },
    sendData() {
      this.serve = JSON.parse(localStorage.getItem("server"));
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
  padding: 0;
  overflow-x: hidden;
}
.app {
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
  /* margin-top: 60px; */
  background: linear-gradient(
    to top,
    rgba(18, 109, 245, 0.781) 0%,
    rgba(0, 30, 128, 0.911) 100%
  );
  width: 100vw;
  min-height: 100vh;
}
</style>
