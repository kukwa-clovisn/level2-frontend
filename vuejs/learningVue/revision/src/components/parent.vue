<template>
  <div class="form">
    <h1>registration form <i class="fa fa-user-circle"></i></h1>
    <div>
      <label for="username">username:</label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="Name"
        placeholder="Enter username"
        required
      />
    </div>
    <div>
      <label for="email">email-address:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email-address"
        v-model="userEmail"
        required
      />
    </div>
    <div>
      <label for="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        v-model="userPassword"
        required
      />
    </div>
    <p v-if="validated" id="error">please fill in the correct information</p>
    <Child
      btnName="register"
      @toggle="submit()"
      class="btn btn-primary rounded"
    />
    <p>already have an account? <a href="">log in</a></p>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "Parent",

  data() {
    return {
      clicked: false,
      text: "",
      Tomato: true,
      validated: false,
      Name: "",
      userEmail: "",
      userPassword: "",
      server: [],
      getData: localStorage.getItem("server"),
      time: new Date(),
      index: 1,

      questions: [
        "what do you understand by web dev?",
        "what is full stack web dev??",
        "what is the difference between frontend and backend as used in fullstack web dev",
        "what do you understand by a framework?",
      ],
      colorCode: [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ],
    };
  },
  emits: ["toLocalStorage"],
  methods: {
    submit() {
      if (
        this.Name.length > 0 &&
        this.Name.trim() !== 0 &&
        this.userEmail.length > 0 &&
        this.userEmail.trim() !== 0 &&
        this.userPassword.length > 0 &&
        this.userPassword.trim() !== 0
      ) {
        this.validated = false;

        if (this.getData == null) {
          this.server = [];
        } else {
          this.server = JSON.parse(this.getData);
        }
        for (let i = 0; i < this.server.length; i++) {
          this.index++;
        }
        this.server.push({
          index: this.index,
          name: this.Name,
          email: this.userEmail,
          password: this.userPassword,
        });

        localStorage.setItem("server", JSON.stringify(this.server));

        (this.Name = ""), (this.userEmail = ""), (this.userPassword = "");
        this.$emit("toLocalStorage");
        // this.server.forEach((day, hour, mins, secs, amp, month) => {
        //   // newDate = new Date().toLocaleString("en-US", {
        //   //   year: "numeric",
        //   //   month: "short",
        //   //   day: "numeric",
        //   // });
        //   amp = hour >= 12 ? "PM" : "AM";
        //   mins = this.time.getMinutes();
        //   hour = this.time.getHours;
        //   secs = this.time.getSeconds();
        //   month = this.time.getMonth();
        //   day = this.time.getDay();
        // });
      } else {
        this.validated = true;
        this.clicked = true;
      }
    },
  },
  components: {
    Child,
  },
};
</script>

<style lang="css" scoped>
.background {
  background: rgba(255, 99, 71, 0.945);
  color: white;
}
.submit {
  background: rgba(32, 32, 240, 0.501);
  color: white;
}
.form {
  width: 50%;
  height: auto;
  padding: 10px;
  margin: 5vh auto;
  border-radius: 10px;
  background: white;
}
@media screen and (max-width: 768px) {
  .form {
    width: 70%;
    height: auto;
    background: white;
  }
}

.form h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-family: sans-serif;
  padding: 10px;
  margin: 2% auto;
  font-size: 27px;
  cursor: pointer;
}

.form div {
  width: 90%;
  margin: 2% auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.form div label {
  width: 100%;
  text-align: left;
  padding: 5px 20px 3px 15px;
  margin: 0 2%;
}

.form input {
  width: 100%;
  height: 50px;
  outline: none;
  border-radius: 30px;
  border: none;
  background: rgba(214, 241, 243, 0.774);
  padding: 5px 20px 3px 20px;
  margin: 2% auto;
  display: block;
  color: rgb(85, 21, 94);
  transition: all 0.4s ease;
}

.form button {
  min-width: 140px;
  display: block;
  margin: 3% auto;
  margin-top: 1%;
  position: relative;
}

.form button.active {
  background: teal;
}

p {
  color: rgba(216, 21, 190, 0.952);
  cursor: pointer;
  font-weight: 500;
  text-align: left;
  padding: 15px;
}

p a {
  text-decoration: underline;
  padding-left: 10px;
}

p#error {
  padding: 5px 5px 5px 50px;
  font-size: 15px;
  color: red;
  margin-top: -2%;
}

input:hover {
  outline: solid 3px teal;
  background: whitesmoke;
  color: #606060;
}
input:focus {
  outline: solid lightblue 3px;
  background: white;
  color: rgba(71, 7, 71, 0.952);
}
input:active {
  outline: solid 2px tomato;
}
</style>