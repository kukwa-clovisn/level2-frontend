<template>
  <main>
    <header>
      <nav class="menu">
        <span @click="open = true"><i class="fas fa-bars"></i></span>
      </nav>
      <div class="query">
        <input
          type="search"
          name="search"
          id="query-search"
          placeholder="search user...."
          v-model="searchItem"
        />
        <button @click="searchUser(users)">
          <span class="fas fa-search icon"></span>
        </button>
      </div>
      <nav class="back">
        <li><router-link to="/" class="route">home</router-link></li>
        <li><router-link to="/" class="route">explore</router-link></li>
      </nav>
    </header>
    <div
      :class="{ show: open }"
      id="hover"
      @click="open = false"
      v-if="open"
    ></div>
    <div :class="{ show: open }" id="menu-div" v-if="open">
      <h1>Dashboard <span @click="open = false">&times;</span></h1>

      <ul>
        <li>
          <routerLink to="/" class="route">home</routerLink>
        </li>
        <li>
          <routerLink to="/" class="route">explore</routerLink>
        </li>
      </ul>
    </div>

    <h1 class="head"> users</h1>
    <div class="content" v-if="parse">
      <div class="user" v-for="(user, id) in users" :key="id">
        <i class="fas fa-user-circle span"></i>
        <h1>{{ user.name }}</h1>
        <ul>
          <li>
            sex:<span>{{ user.sex }}</span>
          </li>
        </ul>
        <button @click="getUser(user.name)">view profile</button>
      </div>
    </div>
    <div id="singleuser" v-if="requested">
      <div id="content">
        <div class="img">
          <img src="../assets/man.jpeg" alt="" />
        </div>
        <div class="desc">
          <h1>{{ singleUser[0].name }}</h1>
          <p>{{ singleUser[0].age }}yrs</p>
          <p>{{ singleUser[0].location }}</p>
          <p>
            sex: <span>{{ singleUser[0].sex }}</span>
          </p>
          <p>{{ singleUser[0].program }}</p>

          <div class="button">
            <button
              @click="
                requested = false;
                parse = true;
              "
            >
              go back
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Users",

  setup() {
    const open = ref(false);
    const requested = ref(false);
    const parse = ref(true);
    const users = ref([]);
    const singleUser = ref([]);
    let searchItem = ref("");

function getData() {
      fetch("http://localhost:4000/api/students")
        .then((res) => res.json())
        .then((res) => {
          console.log('this is from getData')
          users.value = res;
console.log(res);
        })
    }

    function getUser(name) {
      fetch("http://localhost:4000/api/student/" + (name))
        .then((res) => res.json())
        .then((res) => {
          parse.value = false;
          requested.value = true;
          singleUser.value = res.student;
          console.log(res)
        });
    }

    function searchUser(data) {
      const filtered_users = data.filter((user) => {
        return user.name.includes(searchItem.value);
      });
      if (filtered_users.length > 0) {
        users.value = filtered_users;
      } else {
        users.value = [
          {
            id: 30,
            name: "user not found",
            sex: "x",
          },
        ];
      }
    }


    if (!searchItem.value) {
      getData();
    } else {
      searchUser();
    }

    return {
      singleUser,
      parse,
      requested,
      users,
      open,
      getData,
      searchItem,
      getUser,
      searchUser,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  min-height: 110vh;
  position: relative;
  background: white;

  header {
    width: 100vw;
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgb(1, 66, 141) 0%,
      rgb(16, 71, 122) 90%
    );

    .menu {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      padding-right: 10vw;
      align-items: center;

      span {
        color: white;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          transform: rotateZ(-90deg);
        }
        &:active {
          transform: scale(0.8);
        }
      }
    }
    .query {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        width: 80%;
        height: 40px;
        border-radius: 40px 0 0 40px;
        outline: none;
        font-size: 14px;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;
        padding-left: 23px;
        color: var(--bs-dark);
        font-weight: 400;
        &:hover {
          background: white;
        }

        &:focus {
          background: white;
        }
        &:active {
          background: white;
        }
      }
      button {
        width: 20%;
        height: 40px;
        background: white;
        border-radius: 0 40px 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 20px;
          transition: all 0.3s ease;

          &:hover {
            transform: rotateZ(-45deg);
          }
          &:active {
            transform: scale(0.8);
          }
        }
      }
    }
    .back {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 30%;
      height: 100%;

      li {
        list-style-type: none;

        .route {
          text-decoration: none;
          color: white;
          width: 100%;
          font-size: 22px;
          height: 100%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          font-family: monospace;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(0.8);
            color: rgb(211, 197, 2);
          }
        }
      }
    }
  }

  #menu-div {
    width: 25vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -30vw;
    z-index: 1;
    background: white;
    color: black;
    transition: all 0.3s ease-in-out;

    h1 {
      width: 100%;
      height: 20%;
      text-align: center;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: relative;
      border-bottom: 1px solid rgb(155, 155, 155);

      span {
        position: absolute;
        top: 15%;
        right: 2%;
        font-weight: 400;
        font-size: 50px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: rotateZ(-90deg);
        }
      }
    }
    ul {
      width: 100%;
      li {
        list-style-type: none;
        margin: 10px 30px;
        padding: 10px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          background: rgba(207, 205, 205, 0.925);
        }

        .route {
          width: 100%;
          display: block;
          height: 100%;
          text-decoration: none;
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }
  }

  #menu-div.show {
    transition: all 0.3s ease-in-out;
    animation: open 1s 1 linear alternate forwards;
  }

  @keyframes open {
    to {
      left: 0;
    }
  }
  #hover {
    width: 75vw;
    height: 90vh;
    position: fixed;
    top: -110vh;
    right: 0;
    z-index: 1;
    background: rgba(63, 62, 62, 0.575);
  }

  #hover.show {
    animation: up 1s 1 linear alternate forwards;
  }

  @keyframes up {
    to {
      top: 10vh;
    }
  }

  .head {
    padding-top: 15vh;
    text-align: center;
    color: white;
    color: rgb(181, 184, 5);
    text-transform: capitalize;
    font-size: 50px;
    font-weight: 600;
    font-family: "Russo One", sans-serif;
  }
  .content {
    width: 90vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 5vw;
    .user {
      width: 330px;
      height: 60vh;
      background: linear-gradient(
        to bottom,
        rgb(18, 60, 98) 0%,
        rgba(1, 95, 126, 0.52) 60%,
        rgba(2, 52, 110, 0.832) 90%
      );
      border-radius: 4px;
      color: white;
      margin: 25px 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .span {
        cursor: pointer;
        color: rgb(255, 251, 255);
        font-weight: 700;
        font-size: 100px;
        margin: 15px 0;
      }
      h1 {
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        color: rgb(210, 233, 5);
      }
      ul {
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
        margin: 0 auto;
        li {
          text-align: center;
          list-style-type: none;
          font-size: 15px;
          color: white;
          font-family: monospace;
          width: 60%;
          height: 50px;
          // border: 1px solid white;
          margin: 5px 0;

          span {
            font-size: 30px;
            font-weight: 700;
            font-family: "Poppins", sans-serif;
          }

          &:last-child {
            width: 60%;
          }
        }
      }
      button {
        width: 80%;
        display: block;
        height: 45px;
        margin: 0 auto;
        background: rgb(191, 211, 10);
        color: rgb(255, 254, 254);
        border-radius: 4px;
        word-spacing: 6px;
        font-weight: 700;
        font-size: 18px;
        transition: all 0.3s ease-in-out;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;

        &:hover {
          border-radius: 30px;
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  #singleuser {
    width: 100vw;
    height: 70vh;
    position: absolute;
    top: 30vh;
    left: 0;

    #content {
      width: 67vw;
      height: 100%;
      margin: 0 auto;
      background: white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 100%;
          display: block;
          border-radius: 5px 0 0 5px;
          cursor: pointer;
        }
      }

      .desc {
        width: 50%;
        height: 100%;
        padding: 20px;
        box-shadow: 0 0 2px 10px white;
        h1 {
          font-size: 47px;
          font-weight: 600;
          padding: 5px;
          color: teal;
          text-transform: capitalize;
          text-align: center;
        }
        p {
          text-align: center;
          color: teal;
          padding: 5px;
          font-size: 20px;
        }
        .button {
          width: 100%;
          height: 20vh;
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 200px;
            height: 80px;
            border-radius: 4px;
            background: black;
            color: white;
            font-weight: 500;
            text-transform: capitalize;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>