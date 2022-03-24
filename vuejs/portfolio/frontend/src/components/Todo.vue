<template>
  <div class="todo">
    <Header v-if="valid" />
    <div class="showcase" v-if="next">
      <h1>welcome to <span id="welcome">KCN'S dairy</span></h1>
      <div>
        <label for="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="username"
          class="text-capitalize"
          placeholder="Enter your Dairy name..."
          required
        />
      </div>
      <div>
        <label for="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Enter password..."
          required
        />
      </div>
      <p class="errormsg text-danger text-center" v-if="invalid">
        {{ invalidMsg }}
      </p>
      <button id="log-in" class="btn" @click="validate()">
        log in <i class="fa fa-arrow-right"></i>
      </button>
      <p>
        don't have an account? <router-link to="/Register">sign up</router-link>
        <span><a href=""> forgot password?</a></span>
      </p>
    </div>
    <img src="../assets/list.svg" id="pic" v-if="next" alt="" />
    <div class="main" v-if="valid">
      <div class="todo-head">
        <div>
          <img src="../assets/list.svg" alt="DAIRY" />
        </div>
        <h1>kukwa clovis ngong</h1>
        <h2>student at <span>seven advance academy</span></h2>
        <h2>fullstack web developer</h2>
        <h2>kcn.123.com@gmail.com</h2>
        <h2>kukwaclovisngong3@gmail.com</h2>
        <h3>💔 in Christ alone❣️</h3>
      </div>
      <div class="todo-body">
        <h1 id="text-run">
          KCN's Dairy<i class="far fa-user" style="color: rgb(16, 16, 121)"></i>
        </h1>
        <input
          type="text"
          id="inputItem"
          v-model="userData"
          name="text"
          placeholder="input new todo item"
          required
        />
        <div class="addItem">
          <span><i class="far fa-laugh laugh"></i></span>
          <button @click="addTodo()">add todo item</button>
        </div>
        <p id="error" class="py-3" v-if="invalidTask">
          please add a valid task ❣️KCN❣️
        </p>
        <div class="todoItems">
          <ul>
            <li
              :class="{ done: todo.done }"
              v-for="(todo, index) in todoItems"
              :key="index"
            >
              <p>
                <i class="fa fa-calendar-alt" id="calendar"></i>
                {{ todo.date }}
              </p>

              <p id="content">
                <input
                  type="checkbox"
                  name="done"
                  v-model="todo.done"
                  id="tastStatus"
                  @change="addStatus(index)"
                />
                {{ todo.name }}
              </p>
              <span @click="removeTask(index)">
                <i
                  class="fa fa-trash"
                  style="color: white; font-size: 1.2em"
                ></i>
              </span>
            </li>
          </ul>
        </div>
        <p id="pending">
          you have <span id="count">{{ todoCount }}</span
          >pending tasks
        </p>
        <button id="reset" @click="removeAllTodos()">clear all todos</button>
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Todo",
  components: {
    Footer,
    Header,
  },

  setup() {
    let next = ref(true);
    let app = ref(false);
    let valid = ref(false);
    const invalidTask = ref(false);
    let invalidMsg = ref("");
    const userData = ref("");
    const parseData = ref({
      name: "",
      date: ``,
      done: false,
    });
    const username = ref("");
    const password = ref("");
    const todo = ref("");
    const todoCount = ref(0);
    const invalid = ref(false);
    let todoItems = ref([]);
    let isDone = ref(false);
    let status = ref(false);
    // let getFromLocalStorage = localStorage.getItem("new todo");

    const validate = async () => {
      try {
        await fetch("http://localhost:9001/login", {
          method: "Post",
          // mode: "no-cors",
          headers: {
            // "Access-Control-Request-Headers": "Authorization",
            // Authorization: "Bearer secretToken",
            "Content-type": "application/json",
          },
          // credentials: "include",
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            console.log(res);

            if (!res.data) {
              invalidMsg.value = res.msg;
              return (invalid.value = true);
            }

            next.value = false;
            app.value = true;
            valid.value = true;
            invalid.value = false;
            displayTodo(res.data.id);
          });
      } catch (err) {
        console.log(err);
      }
    };

    const displayTodo = async (id) => {
      try {
        await axios("http://localhost:9001/login/data/" + `${id}`)
          .then(async (res) => {
            console.log(res);

            todoItems.value = await res.data.todos;
            console.log(todoItems.value);
            console.log(todoItems.value[1]);
            todoCount.value = todoItems.value.length;
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }

      // getFromLocalStorage = localStorage.getItem("new todo");
      // if (getFromLocalStorage == null) {
      //   todoItems.value = [];
      // } else {
      //   todoItems.value = JSON.parse(getFromLocalStorage);
      // }
      // todoCount.value = todoItems.value.length;
    };

    const updateData = async (data, id) => {
      try {
        await axios
          .post(
            "http://localhost:9001/login/data/" + `${id}`,
            {
              data,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(async (res) => {
            await displayTodo(res.data._id);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };

    const addTodo = async () => {
      console.log(username.value);
      try {
        parseData.value.name = userData.value;
        parseData.value.date = new Date();
        parseData.value.done = false;

        if (userData.value.trim().length !== 0 && userData.value !== "") {
          // if (getFromLocalStorage == null) {
          //   todoItems.value = [];
          // } else {
          //   todoItems.value = JSON.parse(getFromLocalStorage); //coverting the string into json object
          // }

          await axios(
            "http://localhost:9001/login/data/name/" + `${username.value}`
          ).then(async (res) => {
            console.log(res);

            todoItems.value.push(parseData.value);
            await updateData(todoItems.value, res.data._id);
          });

          // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //transforming the json object into string

          // axios
          //   .post(
          //     "http://localhost:9001/login/data/" + "623b80a685b4097d966cfac5",
          //     {
          //       todoItems,
          //     },
          //     {
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //     }
          //   )
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => console.log(err));

          userData.value = "";
          invalidTask.value = false;
        } else {
          invalidTask.value = true;
        }

        todoCount.value = todoItems.value.length;
      } catch (err) {
        console.log(err);
      }
    };

    const removeAllTodos = async () => {
      try {
        // todoItems.value = JSON.parse(getFromLocalStorage);
        // todoItems.value = [];
        // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //updating the local storage
        // todoItems = await getData().todos;
        // let id = await getData().id;

        await axios(
          "http://localhost:9001/login/data/name/" + `${username.value}`
        ).then(async (res) => {
          console.log(res);
          if (window.confirm("Are you sure you want to delete all items??")) {
            todoItems.value = [];
            await updateData(todoItems.value, res.data._id);
            return;
          }
          await displayTodo(res.data._id);
        });
      } catch (err) {
        console.log(err);
      }
    };

    const removeTask = async (index) => {
      try {
        console.log(index);
        // getFromLocalStorage = localStorage.getItem("new todo");
        // todoItems.value = JSON.parse(getFromLocalStorage);
        // await getData();
        // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //updating the local storage after deleting as item

        await axios(
          "http://localhost:9001/login/data/name/" + `${username.value}`
        ).then(async (res) => {
          console.log(res);

          if (!todoItems.value[index].done) {
            if (
              window.confirm(
                `Are you sure you want to delete item ${
                  index + 1
                }? You're not done with it yet`
              )
            ) {
              todoItems.value = await res.data.todos;
              todoItems.value.splice(index, 1); //detete that item you've choosen
              console.log(todoItems.value.indexOf(index));

              await updateData(todoItems.value, res.data._id);
              return;
            }
            await displayTodo(res.data._id);
            return;
          }
          if (
            window.confirm(`Are you sure you want to delete item ${index + 1}?`)
          ) {
            todoItems.value = await res.data.todos;
            todoItems.value.splice(index, 1); //detete that item you've choosen
            console.log(todoItems.value.indexOf(index));

            await updateData(todoItems.value, res.data._id);
            return;
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    const addStatus = async (index) => {
      try {
        // getFromLocalStorage = localStorage.getItem("new todo");
        // todoItems.value = JSON.parse(getFromLocalStorage);
        await axios(
          "http://localhost:9001/login/data/name/" + `${username.value}`
        ).then(async (res) => {
          console.log(res);
          todoItems.value = res.data.todos;
          if (!todoItems.value[index].done) {
            if (window.confirm(`Are you done with with item ${index + 1}`)) {
              todoItems.value[index].done = true;
              isDone.value = true;

              await updateData(todoItems.value, res.data._id);
              return;
            }
            await displayTodo(res.data._id);
            return;
          }

          // localStorage.setItem("new todo", JSON.stringify(todoItems.value));
        });
      } catch (err) {
        console.log(err);
      }
    };

    return {
      next,
      valid,
      isDone,
      invalid,
      username,
      password,
      invalidMsg,
      invalidTask,
      userData,
      addStatus,
      status,
      todoCount,
      todoItems,
      todo,
      removeTask,
      removeAllTodos,
      addTodo,
      validate,
      displayTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryCol: rgba(238, 238, 238, 0.979);
$white: white;
$whiteBorder: rgb(238, 238, 238);

Header {
  background: transparent;
}
.todo {
  margin: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(21, 122, 253, 0.685) 0%,
    rgba(171, 250, 171, 0.623) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  background-size: cover;
}
.showcase {
  width: 35%;
  margin: 0 auto;

  background: white;
  border-radius: 5px;
  padding: 20px 10px 5px 10px;
  height: 70vh;
  position: relative;
  z-index: 1;
  left: -10%;
  top: 5vh;

  @media screen and (max-width: 1000px) {
    width: 60%;
    border-radius: 10px;
  }

  @media screen and (max-width: 500px) {
    width: 75%;
  }
}

.showcase.hide-showcase {
  position: relative;
  animation: hideTodo 0.85s 1 linear alternate forwards;
}

@keyframes hideTodo {
  0% {
    left: 0;
  }

  100% {
    left: 200vw;
    display: none;
  }
}

.showcase h1 {
  text-align: center;
  text-transform: capitalize;
  padding: 5px;
  margin: 2% auto;
  color: #224272;
  font-size: 25px;
  cursor: pointer;
  position: relative;

  #welcome {
    color: rgb(220, 77, 20);
    padding: 0 5px;
    position: relative;
    overflow: hidden;
    letter-spacing: 1px;

    &::before {
      content: "";
      width: 100%;
      height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      border-left: 2px solid rgb(220, 77, 20);
      animation: logo 5s alternate infinite;
      background: white;
    }
  }

  @keyframes logo {
    from {
      top: 0;
      left: 0;
      width: 100%;
    }
    to {
      top: 0;
      left: 100%;
      width: 0;
    }
  }
}

.showcase div {
  width: 90%;
  height: 25%;
  margin: auto;
  display: block;
}

.showcase div label {
  display: block;
  padding: 3px 30px;
  text-transform: capitalize;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
}

.showcase div input {
  width: 100%;
  height: 45px;
  padding: 2px 2px 2px 20px;
  outline: none;
  font-size: 13px;
  border: none;
  background: #eeecec;
  border-radius: 60px;
  color: #224272;
  transition: all 0.3s ease;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

  &:hover {
    border: 2px solid teal;
  }

  &:active {
    border: 2px solid lightseagreen;
  }

  &:focus {
    border: 2px solid rgb(4, 178, 221);
  }
}

#name.wrong-name,
#password.wrong-password,
#name.wrong-info,
#password.wrong-info {
  animation: error 0.2s 6 linear alternate-reverse backwards;
}

@keyframes error {
  0% {
    border: 2px solid red;
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.showcase button {
  width: 90%;
  height: 40px;
  display: block;
  margin: 2% auto;
  border: none;
  border-radius: 60px;
  outline: none;
  background-color: #224272;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;

  i {
    position: relative;
    left: 2%;
    animation: arrow 1s infinite linear reverse forwards;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.8);
  }
}

.showcase {
  p {
    padding: 5px;
    margin-left: 5%;
    font-size: 13px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: brown;
    }

    span {
      float: right;
      margin-right: 5%;
    }

    @media screen and (max-width: 1090px) {
      font-size: 12px;
    }

    @media screen and (max-width: 500px) {
      font-size: 13px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }
  }

  .errormsg {
    text-align: center;
    margin-top: -3%;
    color: rgb(247, 34, 76);
    text-transform: capitalize;
    padding: 0 10px;
  }
}

#pic {
  position: fixed;
  top: 10vh;
  right: 10%;
  width: 450px;
}

.main {
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background: transparent;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;

  .todo-head {
    width: 25vw;
    height: 75vh;
    background: black;
    position: fixed;
    top: 17vh;
    right: 5vw;
    border-radius: 10px;
    animation: profile 20s 1 linear alternate forwards;

    @media screen and (max-width: 850px) {
      width: 30vw;
    }

    div {
      width: 100%;
      height: 50%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50%;
        // border-radius: 50%;
        z-index: 1;
        display: block;
        position: relative;
        animation: nameimg 5s infinite linear alternate forwards;
      }
    }

    h1,
    h2,
    h3 {
      color: #d3d1d1;
      text-align: center;
      font-size: 15px;
      padding: 6px;
      text-transform: capitalize;
      font-weight: 300;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }

    h2 {
      font-size: 12px;
    }

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  @keyframes profile {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes nameimg {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(20px);
    }
  }

  .todo-body {
    width: 40vw;
    height: fit-content;
    background: $white;
    box-shadow: 0 0 1px 2px $white;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    position: absolute;
    top: 0;
    left: 27%;

    @media screen and (max-width: 1000px) {
      width: 60vw;
    }

    @media screen and (max-width: 768px) {
      width: 70vw;
      left: 15%;
    }

    @media screen and (max-width: 430px) {
      border-radius: 10px;
    }

    h1 {
      text-transform: capitalize;
      font-size: 25px;
      font-weight: 600;
      padding: 12px 3px;
      color: #224272;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: fit-content;
      width: 100%;
      position: relative;

      &::before {
        content: "";
        width: 170px;
        height: 26px;
        background: white;
        position: absolute;
        left: 0;
        animation: text-run 4s steps(10, end) infinite;
      }

      i {
        margin-right: 6%;
        color: #497be8;
        cursor: progress;
      }
    }

    @keyframes text-run {
      to {
        left: 170px;
      }
    }

    #inputItem {
      width: 100%;
      height: 70px;
      margin: auto;
      display: block;
      padding: 10px;
      outline: none;
      border: 2px solid $whiteBorder;
      border-radius: 3px;
      background: rgba(240, 239, 239, 0.938);
      box-shadow: 0 0 3px 1px $whiteBorder;
    }

    .addItem {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 20%;
        height: 45px;
        .laugh {
          font-size: 35px;
          margin: 10px 10%;
          color: #497be8;
          cursor: pointer;
          transition: all 0.3s ease;

          @media screen and (max-width: 768px) {
            position: relative;
            left: 35%;
          }

          &:hover {
            color: teal;
          }

          &:active {
            animation: laugh 2s infinite linear alternate forwards;
          }

          @keyframes laugh {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
        }
      }
    }
    button {
      width: 40%;
      height: 45px;
      float: right;
      padding: 5px;
      margin: 10px 0;
      border-radius: 3px;
      border: none;
      background-color: rgb(74, 127, 231);
      color: white;
      text-transform: capitalize;
      transition: all 0.4s ease;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        width: 100%;
        display: block;
        margin: 1% 5%;
      }

      &:hover {
        background: teal;
      }

      &:active {
        transform: scale(0.8);
      }
    }

    #error {
      font-size: 12px;
      color: rgba(231, 16, 16, 0.938);
      text-align: center;
      margin: 1% auto;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        position: relative;
        margin: 3% 0 -2% 0;
        height: 40px;
        width: 90%;
      }
    }

    .todoItems {
      width: 100%;
      height: 200px;
      margin: 3% auto;
      margin-bottom: 0;
      border-radius: 10px;

      ul {
        width: 100%;
        height: 200px;
        padding: 0;
        margin: 0 auto;
        overflow: hidden;
        overflow-y: scroll;
        background: $primaryCol;
        border: 3px solid $primaryCol;
        border-right: none;
        border-left: none;

        li {
          width: 98%;
          height: fit-content;
          margin: 5px auto;
          margin-top: 0;
          padding: 4px 0;
          list-style-type: none;
          font-size: 15px;
          border-radius: 2px;
          display: block;
          text-transform: capitalize;
          position: relative;
          transition: all 0.3s ease;
          background: $white;
          box-shadow: 0 0 2px 2px $whiteBorder;

          span {
            width: 15%;
            height: 100%;
            position: absolute;
            right: -20%;
            top: 0;
            background: #e74c3c;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            cursor: pointer;

            i {
              border-radius: 5px;
              font-size: 26px;
              color: white;
              cursor: pointer;
              transition: all 0.5s ease;

              &:active {
                transform: scale(0.7);
              }
            }
          }

          &:hover {
            span {
              right: 0;
            }
          }

          i {
            font-size: 26px;
            color: white;
            cursor: pointer;
            transition: all 0.5s ease;

            &:active {
              transform: scale(0.7);
            }
          }

          p {
            cursor: pointer;
            font-size: 15px;
            width: 90%;
            padding: 2px 0 2px 10px;
            margin: 5px 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            transition: all 0.3s ease;
            &:nth-child(odd) {
              font-size: 10px;
            }

            #taskStatus {
              width: 40px;
              height: 40px;
              border: 2px solid gray;
              outline: none;
              cursor: pointer;
            }

            p#calendar {
              position: absolute;
              left: 1vw;
              top: 13px;
              font-size: 17px;
              color: rgb(74, 127, 231);
              cursor: pointer;
            }
          }

          &:hover {
            height: fit-content;

            p#content {
              width: 81%;
              height: fit-content;
              overflow: scroll;
              display: block;
              position: relative;
              overflow-x: hidden;
              white-space: pre-wrap;
              text-overflow: unset;
              word-break: break-all;
              font-size: 0.8em;
            }
          }
        }

        li.done {
          background: rgb(193, 248, 193);

          #content {
            text-decoration: line-through;
          }
        }
      }
    }

    #pending {
      text-align: center;
      padding: 3px;
      margin: 0 auto;
      text-transform: capitalize;

      #count {
        padding: 0 5px;
        color: red;
      }
    }

    #reset {
      width: 100%;
      height: 45px;
      margin: 1% auto;
      text-align: center;
    }
  }

  button:active {
    transform: scale(0.8);
  }
}

.main.show-main {
  display: flex;
  position: relative;
  animation: show 2s 1 linear alternate-reverse forwards;
}

@keyframes show {
  0% {
    top: -75vh;
  }

  100% {
    top: -10vh;
  }
}
</style>
