<template>
  <header class="d-none d-lg-flex justify-content-between align-items-center">
    <nav
      class="
        logo
        d-flex
        justify-content-center
        align-items-center
        text-capitalize
      "
    >
      <router-link to="/" class="logoName" title="go to home"
        >KCN empire/codingHerald</router-link
      >
    </nav>
    <nav class="nav d-flex justify-content-between align-items-center">
      <li>
        <router-link to="/Currency" class="a"
          >Currency converter<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Exchange" class="a"
          >Currency Exchange<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Todo" class="a"
          >todo app<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/User" class="a"
          >random user app<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Watch" class="a"
          >stop watch <i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Weather" class="a"
          >weather forcast<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/BMI" class="a"
          >BMI Calculator<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li style="background: rgb(245, 144, 95); color: #fff">
        <router-link to="/Register" class="a text-white">
          sign up <i class="fa fa-caret-down"></i>
        </router-link>
      </li>
      <span class="scroll">></span>
    </nav>
  </header>
  <header
    class="
      small-screens
      d-lg-none d-flex
      justify-content-between
      align-items-center
    "
  >
    <nav v-if="toggled" class="sidebar">
      <span class="close" @click="untoggle()">&times;</span>
      <ul
        class="nav d-flex justify-content-evenly align-items-center flex-column"
      >
        <li class="nav-item">
          <router-link to="/Currency" class="nav-link">
            currency converter <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Exchange" class="nav-link">
            currency exchange <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Todo" class="nav-link">
            todo app <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/User" class="nav-link">
            random user api <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Watch" class="nav-link">
            stop watch <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Weather" class="nav-link">
            weather forcast <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/BMI" class="nav-link">
            BMI Calculator <i class="fa fa-caret-down"></i>
          </router-link>
        </li>
      </ul>
    </nav>

    <nav
      class="
        logo
        d-flex
        justify-content-center
        align-items-center
        flex-md-column
        text-capitalize
      "
      title="In Christ alone#TeamJesus4Life"
    >
      codingHerald
    </nav>
    <nav id="bars" v-if="clicked" @click="toggleMenu()">
      <i class="fa fa-bars" id="menu-bar" title="menu/projects"></i>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      toggled: false,
      clicked: true,
      scrolled: true,
    };
  },
  updated() {
    this.scrolled = false;
  },
  methods: {
    toggleMenu() {
      this.toggled = true;
      this.clicked = false;
    },
    untoggle() {
      this.toggled = false;
      this.clicked = true;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 15vh;

  @media screen and (max-width: 1000px) {
    height: 20vh;
  }

  #bars {
    font-size: 2em;
    width: 15%;
    text-align: center;
    position: relative;
    color: rgb(2, 126, 109);
    cursor: pointer;
    transition: all 0.3s ease;

    #menu-bar {
      transition: all 0.2s ease;
      &:active {
        font-size: 1.5em;
      }
    }
  }
  .sidebar {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to top,
      rgb(130, 223, 241) 0%,
      rgb(81, 152, 252) 100%
    );
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 20px;

    .nav-link {
      font-weight: 500;
      font-size: 18px;
      color: var(--bs-dark);

      &:hover {
        // background: var(--bs-light);
        color: var(--bs-light);
      }
    }

    .close {
      position: absolute;
      right: 5%;
      color: white;
      font-size: 2em;
      cursor: pointer;
      transition: all 0.3s ease;

      &:active {
        font-size: 1.5em;
      }
    }

    ul {
      width: 100%;
      height: 100%;

      li {
        min-width: 400px;
        text-align: center;
        &:hover {
          .nav-link {
            color: var(--bs-light);
          }
        }
      }
    }
  }

  .apps {
    width: 40vw;
    height: 100%;
    margin-right: 2%;
    @media screen and (max-width: 1000px) {
      height: 50%;
    }
  }

  .logo {
    color: rgb(176, 77, 38);
    font-weight: 700;
    font-size: 1.3em;
    cursor: pointer;
    .logoName {
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.5em;
      color: rgb(176, 77, 38);
      letter-spacing: 1.3px;
      position: relative;

      @media screen and (max-width: 1200px) {
        font-size: 1em;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.8em;
        width: 70%;
        left: -10%;
        font-size: 2em;
      }
    }
  }

  nav {
    width: 40vw;
    padding: 4px;
    font-size: 1.1em;
    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 3% 0;
    }

    .input {
      width: 290px;
      input {
        width: 85%;
        height: 40px;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
        padding: 10px 20px;
        cursor: pointer;
      }
      button {
        width: 15%;
        height: 40px;
        border: none;
        padding: 5px;
        border-radius: 0 5px 5px 0;
      }
    }
  }

  .nav {
    width: 70vw;
    overflow: hidden;
    flex-wrap: nowrap;
    overflow-x: scroll;
    position: relative;

    &::-webkit-scrollbar {
      height: 3px;
      cursor: pointer;
    }

    li {
      min-width: 170px;
      list-style-type: none;
      cursor: pointer;
      text-transform: capitalize;
      background: white;
      padding: 10px 20px;
      border-radius: 30px;
      transition: all 0.3s ease;
      font-size: 0.7em;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgb(24, 26, 25);
        .a {
          color: var(--bs-light);
        }
      }
      &:active {
        transform: scale(0.9) translateX(20px);
      }

      .a {
        text-decoration: none;
        color: rgb(2, 158, 62);

        i {
          padding-right: 10px;
        }
      }

      @media screen and (max-width: 1200px) {
        font-size: 0.5em;
      }
      router-link {
        width: 100%;
        height: 100%;
        background: inherit;
      }
    }
    .scroll {
      position: sticky;
      right: 0;
      top: 4vh;
      background: transparent;
      color: rgb(71, 66, 66);
      width: 40px;
      height: 40px;
      font-size: 2em;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;

      animation: scroll 2s linear infinite alternate forwards;
    }

    @keyframes scroll {
      to {
        right: 20px;
      }
    }
  }
}
</style>