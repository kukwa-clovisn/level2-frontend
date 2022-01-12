<template>
  <main>
    <header class="d-flex justify-content-between align-items-center">
      <nav>
        <h1 class="lead d-sm-none" title="welcome to your world of creativity">
          kcn empire 2k21
        </h1>
        <h1
          class="lead d-none d-sm-block"
          title="welcome to your world of creativity"
        >
          codingHerald.net
        </h1>
      </nav>
      <nav class="menu">
        <i class="fa fa-bars menu-bar"></i>
        <span class="cross-bar">&times;</span>
        <ul class="dropdown-menu">
          <li>home</li>
          <li><i class="fa fa-caret-left link"></i>pages</li>
          <li><i class="fa fa-caret-left link"></i>about</li>
          <li><i class="fa fa-caret-left link"></i>orders</li>
          <li>sign up</li>
        </ul>
      </nav>
      <nav class="nav">
        <li class="nav-item">
          <router-link to="/" class="route"> home</router-link>
        </li>
        <li class="nav-item dropdown" title="applications...">
          <router-link to="" class="route"
            ><i class="i fa fa-caret-down"></i> pages</router-link
          >
          <ul class="dropdown-menu drop">
            <li>
              <router-link class="dropdown-item" to="/Currency">
                currency converter</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/Exchange">
                currency exchange
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/Todo">
                Todo app
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/Weather">
                weather forcast
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/User">
                random User
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/Watch">
                stop Watch
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/BMI">
                BMI calculator
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/Dashboard">
                Dashboard
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="" class="route"
            ><i class="i fa fa-caret-down"></i> about</router-link
          >
          <ul class="dropdown-menu dropAbout">
            <li>
              <router-link to="" class="dropdown-item">portfolio</router-link>
            </li>
            <li>
              <router-link to="" class="dropdown-item">academy</router-link>
            </li>
            <li>
              <router-link to="" class="dropdown-item">sites</router-link>
            </li>
          </ul>
        </li>

        <li
          class="nav-item"
          title="register for free and benefit from our numerous applications"
        >
          <router-link to="/" class="route"> sign up</router-link>
        </li>
      </nav>
    </header>
    <div class="content">
      <div
        class="info text-center text-white lead d-none d-lg-block d-md-block"
      >
        kcn empire
      </div>
      <div
        class="
          head
          text-center
          display-3
          d-flex
          justify-content-between
          flex-column
        "
      >
        <div class="blogOne d-none d-lg-block d-md-block">codingHerald.net</div>
        <!-- <div class="animate">coding...</div> -->
        <div class="canvas">
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
          <canvas></canvas>
        </div>
        <div class="canva">
          <canvas></canvas>
          <canvas></canvas>
        </div>
      </div>

      <div class="contact d-flex justify-content-around align-items-start">
        <div class="left-content">
          <div class="btns">
            <button class="hire btn btn-success">
              <router-link to="" class="link">hire</router-link>
            </button>
            <button class="hire btn btn-success">
              <router-link to="/Register" class="link">sign up</router-link>
            </button>
          </div>
        </div>
        <div class="blogTwo text-center display-2 text-capitalize">
          <span>building</span> professional<span> websites.</span>
        </div>
        <div class="right-content">
          <div id="anim">
            <img src="../assets/desk.svg" alt="" />
          </div>
          <div class="sidebar">
            <h1 class="text-center">blog post...</h1>
            <div>
              <p class="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur quas vero atque illo? Accusantium consectetur eius
                libero totam magnam quo, sint illo atque ullam voluptatem ab
                impedit cumque quam deserunt dolorem quod quae veniam minus?
                Laudantium, in vitae expedita repudiandae sequi aspernatur animi
                at necessitatibus corporis distinctio omnis neque illum minima
                ipsam maxime eaque incidunt eos, unde cumque? At impedit nulla
                amet, enim cupiditate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    if (window.innerWidth < 1000) {
      console.log("it worked");
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: auto;
  background: linear-gradient(
    to bottom right,
    lightseagreen 0%,
    mediumseagreen 50%,
    teal 100%
  );
  padding: 0;
  margin: 0;

  header {
    width: 100%;
    height: 20vh;
    padding: 0 20px;
    border-radius: 0 0 0 100%;
    @media screen and (max-width: 1000px) {
      width: 100%;
      padding: 20px;
    }
    nav {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(214, 252, 2);
      text-transform: capitalize;
      &:first-child {
        @media screen and (max-width: 1000px) {
          width: 70%;
        }
      }

      h1 {
        font-size: 40px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .menu {
      display: none;
      width: 20%;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;

      &:hover {
        ul {
          display: flex;
        }
        .menu-bar {
          display: none;
        }
        .cross-bar {
          display: flex;
        }
      }
      .menu-bar,
      .cross-bar {
        font-size: 30px;
        cursor: pointer;
        color: white;
      }
      .cross-bar {
        display: none;
        font-size: 40px;
      }
      ul {
        width: 500px;
        height: 480px;
        background: white;
        position: absolute;
        display: none;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        top: 45px;
        left: -255px;
        padding: 0;

        li {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            background: rgb(187, 184, 184);

            .link {
              animation: link 0.7s linear alternate forwards infinite;
            }

            @keyframes link {
              to {
                left: -25px;
              }
            }
          }

          .link {
            position: relative;
            left: -10px;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        display: flex;
      }
    }

    .nav {
      width: 60vw;

      justify-content: space-between;

      @media screen and (max-width: 1000px) {
        display: none;
      }

      li {
        width: 140px;
        height: 40px;
        list-style-type: none;
        border-radius: 3px;
        border: none;
        // background: white;
        transition: all 0.2s ease;
        position: relative;

        &:hover {
          border-radius: 30px;
          width: 150px;
          height: 50px;

          .drop {
            display: flex;
            left: 0;
            top: 53px;
          }
          .dropAbout {
            display: flex;
            left: 0;
            top: 53px;
          }
        }

        .route {
          text-decoration: none;
          color: #f7f5f5;
          width: 100%;
          height: 100%;
          font-size: 22px;
          font-weight: 300;
          text-transform: capitalize;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          .i {
            padding-right: 5px;
            font-size: 22px;
            color: rgb(220, 20, 137);
          }
          &:hover {
            font-size: 18px;
          }
        }

        .drop,
        .dropAbout {
          background: white;
          width: 350px;
          height: 400px;
          position: absolute;
          top: 150px;
          left: 100px;
          display: none;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          transition: all 0.5s ease-in;
          padding: 5px;

          li {
            border-bottom: 0.5px solid gray;
            width: 95%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.6s ease;

            .dropdown-item {
              width: 100%;
              color: rgb(2, 32, 2);
              background: transparent;
              text-transform: capitalize;
            }
            &:hover {
              background: rgb(0, 30, 43);
              width: 100%;
              border-radius: 3px;

              .dropdown-item {
                color: white;
              }
            }
          }
        }
        .dropAbout {
          top: 100px;
          left: 10px;
          height: 200px;
          // background: rgb(205, 243, 248);
        }
      }
    }
  }

  .content {
    width: 100vw;
    height: auto;
    background: rgb(0, 30, 43);
    background: rgb(5, 126, 120);
    border-radius: 0 100% 0 0;
    padding-top: 60px;
    position: relative;
    @media screen and (max-width: 1000px) {
      height: 80vh;
    }

    .head {
      width: 100vw;
      height: 28vh;
      opacity: 0.9;
      margin-bottom: 10px;
      @media screen and (max-width: 1000px) {
        height: 50vh;
      }

      .blogOne {
        color: rgba(177, 221, 218, 0.836);
        font-size: 0.95em;
        font-weight: 800;
        cursor: pointer;
        text-transform: capitalize;
        transition: all 0.5s ease;
        &:hover {
          font-size: 1em;
        }
      }

      .animate {
        width: 325px;
        padding: 5px;
        margin: 0 auto;
        height: 50px;
        text-transform: capitalize;
        position: relative;
        left: 350px;
        opacity: 0.8;
        overflow: hidden;
        text-align: left;
        letter-spacing: 2px;
        font-size: 30px;
        color: rgb(3, 232, 248);

        &::before {
          content: "";
          width: 10%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
          left: 38%;
          background: rgb(5, 126, 120);
          animation: logo 1s steps(3) infinite;
        }
      }

      @keyframes logo {
        to {
          left: 50%;
          top: 0;
          right: 0;
        }
      }

      .canvas {
        position: fixed;
        top: 50vh;
        left: 40vw;

        canvas {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: purple;
          position: relative;
          top: -30px;
          left: 200px;
          cursor: pointer;
          border: none;
          outline: none;
          opacity: 0;

          &:nth-child(odd) {
            background: yellow;
            animation: one 8s linear infinite alternate forwards;
          }
          &:nth-child(even) {
            background: red;
            animation: two 8s linear infinite alternate forwards;
          }
          &:last-child {
            animation: three 8s linear infinite alternate forwards;
            background: white;
          }
          &:first-child {
            animation: four 8s linear infinite alternate forwards;
            background: black;
          }
        }
        @keyframes one {
          50% {
            top: -200px;
            left: 200px;
          }
          75% {
            top: 250px;
            left: 100px;
          }
          to {
            top: -300px;
            left: 400px;
            opacity: 0.5;
            transform: translateZ(400px);
          }
        }
        @keyframes two {
          50% {
            top: 100px;
            left: -200px;
          }
          80% {
            top: -200px;
            left: -200px;
          }
          to {
            opacity: 0.5;
            top: 300px;
            left: 100px;
          }
        }
        @keyframes three {
          50% {
            top: -100px;
            left: -200px;
          }
          80% {
            top: 200px;
            left: 200px;
          }
          to {
            top: 300px;
            opacity: 0.5;
            left: 100px;
          }
        }
        @keyframes four {
          50% {
            top: 100px;
            left: 200px;
          }
          80% {
            top: -200px;
            left: -200px;
          }
          to {
            opacity: 0.5;
            top: 300px;
            left: -100px;
          }
        }
      }

      .canva {
        width: 200px;
        height: 70px;
        position: fixed;
        left: 50px;
        top: 60vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        canvas {
          width: 50px;
          height: 50px;
          border-radius: 30%;
          background: purple;
          position: relative;
          top: 0;
          opacity: 0.9;
          border: none;
          outline: none;
          cursor: pointer;
          animation: canva 5s linear alternate infinite forwards;

          &:last-child {
            animation: canv 6s linear infinite alternate forwards;
            background: rgb(83, 128, 0);
          }
        }
        @keyframes canva {
          to {
            top: -150px;
            border-radius: 50%;
          }
        }
        @keyframes canv {
          from {
            top: -170px;
          }
          to {
            top: 0;
            border-radius: 50%;
          }
        }
      }
    }
  }

  .info {
    width: 20vw;
    height: 7vh;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 100px;
    top: 170px;
    cursor: cell;
    opacity: 1;
    animation: cell 5s infinite linear alternate forwards;
  }

  @keyframes cell {
    to {
      opacity: 0;
    }
  }

  .contact {
    width: 100vw;
    height: auto;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      &:hover {
        .sidebar {
          left: 0;
        }
      }
    }

    .btns {
      width: 42vw;
      margin: 0 auto;
      height: 15vh;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      @media screen and (max-width: 1000px) {
        width: 50vw;
        margin: 0 auto;
      }
      @media screen and (max-width: 900px) {
        width: 60vw;
        margin: 0 auto;
      }
      @media screen and (max-width: 730px) {
        width: 80vw;
        margin: 0 auto;
      }

      button {
        width: 200px;
        height: 60px;
        background: white;
        border: none;
        border-radius: 3px;
        transition: all 0.5s ease-out;

        &:hover {
          transform: rotate(30deg);
          border-radius: 30px;
        }

        &:last-child {
          background: transparent;
          border: 0.5px solid white;
          color: white;
          .link {
            color: white;
          }
        }

        .link {
          text-decoration: none;
          color: rgb(46, 43, 43);
          font-weight: 600;
          font-size: 1.2em;
          text-transform: capitalize;
        }
      }
    }

    .blogTwo {
      width: 91%;
      height: 150px;
      margin: 0 auto;
      color: white;
      font-size: 95px;
      cursor: pointer;
      opacity: 0.9;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      transition: all 0.6s ease-in-out;

      span {
        color: rgb(1, 187, 125);

        font-size: 100px;
        &:last-child {
          color: tomato;
          font-size: 90px;
        }
      }

      &:hover {
        font-size: 50px;
      }

      @media screen and (max-width: 1000px) {
        font-size: 35px;
        span {
          font-size: 40px;
          &:last-child {
            font-size: 36px;
          }
        }

        &:hover {
          font-size: 20px;
        }
      }
    }

    .left-content {
      @media screen and (max-width: 1000px) {
        // background: rgb(0, 30, 43);
        border-radius: 0 100% 0 0;
      }
      @media screen and (max-width: 800px) {
        background: transparent;
      }
    }
    .right-content {
      width: 100vw;
      position: relative;
      top: 0;
      background: rgb(153, 143, 3);
      border-radius: 100%;
      margin-bottom: 5vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      @media screen and (max-width: 1000px) {
        width: 60vw;
        top: 120px;
        border-radius: 30% 0 0 0;
        background: linear-gradient(
          to bottom right,
          lightseagreen 0%,
          mediumseagreen 50%,
          teal 100%
        );
      }

      @media screen and (max-width: 800px) {
        width: 100%;
        border-radius: 100% 0 0 0;
        padding-left: 10%;
      }

      #anim {
        width: 30vw;
        margin: 2vh auto;
        height: auto;
        position: relative;
        left: -570px;
        transition: all 2s ease-in-out;
        @media screen and (max-width: 800px) {
          display: none;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
          cursor: pointer;
          border-radius: 3px;
        }
      }

      .sidebar {
        width: 40vw;
        height: 430px;
        position: relative;
        left: 620px;
        padding: 10px;
        background: whitesmoke;
        border-radius: 3px;
        transition: all 1s ease;
        margin-top: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        @media screen and (max-width: 800px) {
          width: 600px;
        }
        @media screen and (max-width: 700px) {
          width: 500px;
        }
        @media screen and (max-width: 600px) {
          width: 400px;
          padding: 5%;
          margin: 0 auto;
        }

        h1 {
          text-transform: capitalize;
          padding: 10px;
          color: teal;
          font-size: 40px;
        }

        div {
          width: 95%;
          margin: 0 auto;
          p {
            font-size: 20px;
            color: rgb(58, 54, 54);
          }
        }
      }
    }

    &:hover {
      #anim {
        left: 0;
      }
      .sidebar {
        left: -50px;
      }
    }
  }
}
</style>