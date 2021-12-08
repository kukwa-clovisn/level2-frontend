<template>
  <main>
    <header class="d-flex justify-content-between align-items-center">
      <nav>
        <h1 class="lead" title="welcome to your world of creativity">
          kcn empire 2k21
        </h1>
      </nav>
      <nav class="nav">
        <li>
          <router-link to="/" class="route"
            ><i class="i fa fa-home"></i> home</router-link
          >
        </li>
        <li>
          <router-link to="/" class="route"
            ><i class="i fa fa-caret-down"></i> about</router-link
          >
        </li>
        <li>
          <router-link to="/" class="route"
            ><i class="i fa fa-caret-down"></i> pages</router-link
          >
        </li>
        <li>
          <router-link to="/" class="route"
            ><i class="i fa fa-caret-down"></i> sign up</router-link
          >
        </li>
      </nav>
    </header>
    <div class="content">
      <div class="info text-center text-white lead">kcn empire</div>
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
        <div class="blogOne">codingHerald.net</div>
        <div class="animate">coding...</div>
        <div class="blogTwo text-center display-2 text-capitalize">
          <span>building</span> professional<span> websites.</span>
        </div>
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
        <div>
          <div class="btns">
            <button class="hire btn btn-success">
              <router-link to="" class="link">hire</router-link>
            </button>
            <button class="hire btn btn-success">
              <router-link to="/Register" class="link">sign up</router-link>
            </button>
          </div>
          <div id="anim">
            <img src="../assets/desk.svg" alt="" />
          </div>
        </div>

        <div class="sidebar">
          <h1 class="text-center">blog post...</h1>
          <div>
            <p class="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              quas vero atque illo? Accusantium consectetur eius libero totam
              magnam quo, sint illo atque ullam voluptatem ab impedit cumque
              quam deserunt dolorem quod quae veniam minus? Laudantium, in vitae
              expedita repudiandae sequi aspernatur animi at necessitatibus
              corporis distinctio omnis neque illum minima ipsam maxime eaque
              incidunt eos, unde cumque? At impedit nulla amet, enim cupiditate
            </p>
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
  //   created() {
  //     window.onscroll = function (event) {
  //       if (document.documentElement.scrollTop > 100) {
  //         this.scrolled = true;
  //         alert("it should change");
  //       } else {
  //         this.scrolled = false;
  //       }
  //       console.log(event);
  //     };
  //   },
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
    width: 95%;
    height: 15vh;
    // background: rgb(2, 54, 122);

    nav {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(214, 252, 2);
      text-transform: capitalize;

      h1 {
        font-size: 40px;
        font-weight: 600;
        cursor: pointer;
      }
    }

    .nav {
      width: 55%;
      justify-content: space-between;
      li {
        width: 140px;
        height: 40px;
        list-style-type: none;
        border-radius: 3px;
        border: none;
        background: white;

        transition: all 0.2s ease;

        &:hover {
          border-radius: 30px;
          width: 150px;
          height: 60px;
        }

        .route {
          text-decoration: none;
          color: #030303;
          width: 100%;
          height: 100%;
          text-transform: capitalize;
          display: flex;
          justify-content: center;
          align-items: center;

          .i {
            padding-right: 5px;
            font-size: 1.5em;
            color: rgb(220, 20, 137);
          }
        }
      }
    }
  }

  .content {
    width: 100vw;
    height: auto;
    background: rgb(0, 30, 43);
    border-radius: 0 0 0 100%;
    padding-top: 40px;
    position: relative;

    .head {
      width: 100vw;
      height: 62vh;
      margin-bottom: 10px;

      .blogOne {
        color: white;
        font-size: 0.75em;
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
        left: 0;
        overflow: hidden;
        text-align: left;
        letter-spacing: 2px;
        font-size: 30px;
        color: rgb(2, 129, 138);

        &::before {
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          background: rgb(0, 30, 43);
          animation: logo 5s linear alternate infinite;
        }
      }

      @keyframes logo {
        to {
          left: 100%;
          top: 0;
          right: 0;
        }
      }

      .blogTwo {
        width: 92%;
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
          color: tomato;
          font-size: 100px;
          &:last-child {
            color: rgb(1, 187, 125);
            font-size: 90px;
          }
        }

        &:hover {
          font-size: 50px;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 10px;
  }

  .contact {
    width: 100vw;
    height: auto;
    padding: 0 20px;
    // margin: 1vh auto;

    .btns {
      width: 40vw;
      height: 15vh;
      display: flex;
      justify-content: space-between;
      padding: 10px;

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

    #anim {
      width: 90%;
      margin: 2vh auto;
      height: auto;
      position: relative;
      left: -570px;
      transition: all 2s ease-in-out;

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
      height: 100%;
      position: relative;
      left: 620px;
      padding: 10px;
      background: whitesmoke;
      border-radius: 3px;
      transition: all 1s ease;
      margin-top: 100px;

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

    &:hover {
      #anim {
        left: 0;
      }
      .sidebar {
        left: 0;
      }
    }
  }
}
</style>