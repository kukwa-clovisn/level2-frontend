<template>
  <main>
    <header></header>
    <div class="menu">
      <router-link to="/overview/todo">todo app</router-link>
      <router-link to="/overview/currency">crypto</router-link>
      <router-link to="/overview/Exchange">exchange</router-link>
      <router-link to="/overview/weather">weather</router-link>
      <router-link to="/overview/user">random user</router-link>
    </div>
    <div class="content">
      <div class="top">
        <h1 class="text-capitalize text-bold text-center">top content here!</h1>
      </div>
      <div class="bottom">
        <div class="item">
          <img src="../assets/auth.png" alt="todo list " />
          <h2>todo app</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, enim!
          </p>
        </div>
        <div class="item">
          <img src="../assets/auth.png" alt="" />
          <h2>crypto exchange</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            aliquam.
          </p>
        </div>
        <div class="item">
          <img src="../assets/auth.png" alt="" />
          <h2>currency exchange</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a.
          </p>
        </div>
        <div class="item">
          <img src="../assets/auth.png" alt="" />
          <h2>weather forcast</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            assumenda.
          </p>
        </div>
        <div class="item">
          <img src="../assets/auth.png" alt="" />
          <h2>random user</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            neque.
          </p>
        </div>
      </div>
    </div>
  </main>
  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Client",
  setup() {
    const router = useRouter();
    let getFromLocalStorage = ref(localStorage.getItem("token"));
    onMounted(() => {
      if (!getFromLocalStorage.value) {
        router.push("/login");
      }
      console.log(getFromLocalStorage.value);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
$tertiaryCol: rgb(224, 222, 222);
$secondCol: rgb(3, 63, 126);
main {
  width: 100vw;
  height: fit-content;
  background: white;
  padding-bottom: 30px;

  header {
    width: 94vw;
    height: 10vh;
    position: fixed;
    top: 0;
    right: 0;
    background: transparent;
    box-shadow: 2px 0 2px 1px $tertiaryCol;
    z-index: 1;
  }

  .menu {
    width: 6vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;
    background: $secondCol;
    background-attachment: fixed;
    background-size: cover;
  }

  .content {
    width: 90vw;
    position: relative;
    height: fit-content;
    margin: 0 auto;
    padding-top: 11vh;
    left: 3vw;
    background: white;

    .top {
      width: 100%;
      height: 60vh;
    }
    .bottom {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: 500px;
        height: 300px;
        border-radius: 5px;
        margin: 20px auto;
        box-shadow: 0 0 2px 1px rgb(240, 239, 239);
        overflow: hidden;
        cursor: pointer;

        img {
          width: auto;
          height: 70%;
          // display: block;
          cursor: pointer;
        }

        h2 {
          font: 700 20px "Poppins", sans-serif;
          text-transform: capitalize;
          padding: 20px;
          padding-bottom: 0;
          margin: 0;
        }

        p {
          font: 400 11px "Poppins", sans-serif;
          padding-left: 20px;
          padding-top: 0;
        }
      }
    }
  }
}
</style>
