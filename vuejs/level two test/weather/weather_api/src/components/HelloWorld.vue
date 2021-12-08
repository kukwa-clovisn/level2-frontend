<template>
  <header class="d-flex justify-content-between align-items-center">
    <nav class="logo d-flex justify-content-between align-items-center">
      <span class="text-uppercase kcn">tj4l</span>
      <div
        class="
          wrapper
          d-flex
          flex-column
          justify-content-center
          align-items-start
        "
      >
        <li class="text-uppercase text-center">kukwa clovis ngong</li>

        <li class="text-uppercase text-center">keyboardist</li>
        <li class="text-uppercase text-center">youtuber</li>
        <li class="text-uppercase text-center">fullstack web developer</li>
      </div>
    </nav>
    <nav class="d-flex d-lg-none justify-content-end align-items-center bar">
      <i class="fa fa-bars text-white bars"></i>
    </nav>
    <nav
      class="links d-none d-lg-flex justify-content-evenly align-items-center"
    >
      <router-link class="text-capitalize text-white display-6"
        >Home</router-link
      >
      <router-link class="text-capitalize text-white display-6"
        >Home</router-link
      >
      <router-link class="text-capitalize text-white display-6"
        >Home</router-link
      >
      <router-link class="text-capitalize text-white display-6"
        >Home</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style lang="css" scoped>
header {
  width: 100%;
  height: 15vh;
  background: inherit;
  overflow: hidden;
}

.bar .bars {
  margin-right: 10vw;
  cursor: pointer;
  font-size: 30px;
}

.logo {
  width: 500px;
  height: 100%;
  padding: 0 10px;
  position: relative;
}
.kcn {
  font-size: 30px;
  color: rgb(81, 236, 223);
  position: absolute;
  left: 10%;
  top: 20%;
}
.wrapper {
  width: 70%;
  height: 352px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
}
.wrapper li {
  list-style-type: none;
  color: rgb(110, 247, 224);
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 40px;
  position: relative;
  top: 0;
  height: 88px;
  background: inherit;
  width: 100%;
  z-index: 0.5;
  text-align: left;
  animation: change 32s steps(4) infinite;
}

.wrapper li::before {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgb(1, 129, 51) 0%,
    rgb(20, 141, 78) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  animation: move 4s infinite linear alternate;
}

@keyframes change {
  to {
    top: -352px;
  }
}
@keyframes move {
  from {
    left: 0;
    width: 100%;
  }
  to {
    left: 350px;
    width: 0;
  }
}

.links {
  width: 600px;
  height: 100%;
}
.links router-link {
  font-size: 20px;
  font-weight: 400;
}
</style>