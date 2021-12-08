<template>
  <div>
    <br />
    <Logo />
    <br />
    <form>
      <label for="username">username:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="What should we call you?"
        required
        v-model="text"
      />
   <Button Btnname="continue" @click="login()" />

      <p><a href="">already have an account?</a></p>
    </form>
    <Footer
      footer="by registering you agree to KCN's Terms of Service and Privacy Policy"
    />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import Footer from "./Footer.vue";
// import quiz from "./quiz.vue"

export default {
  name: "Form",
  components: {
    Button,
    Logo,
    Footer,
    // quiz
  },
  data() {
    return {
      text: "",
      done: Boolean,
    };
  },
  methods: {
    login() {
      if (this.text.length > 5) {
        localStorage.setItem("username", JSON.stringify(this.text));
 
 
}
else {
        // alert("hey no name");
      window.confirm('please fill in a name')
      }
      } 
    },
  }

</script>

<style lang="scss" scoped>
div {
  animation: load 5s 1 linear alternate forwards;
  width: 40%;
  margin: 3vh auto;
  border-radius: 10px;
  color: white;
  background: rgb(54, 57, 63);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  .logo {
    margin: 2% auto;
  }

  form {
    // wdith: 100%;
    label {
      display: block;
      text-align: left;
      width: 80%;
      margin: 1% auto;
      text-transform: uppercase;
      cursor: pointer;
      color: rgb(190, 188, 188);
    }
    input {
      width: 80%;
      height: 50px;
      display: block;
      margin: 2% auto;
      outline: none;
      border-radius: 5px;
      padding: 3px 4px 3px 18px;
      color: #606060;
    }
    button {
      width: 85%;
      height: 50px;
      background: rgb(88, 101, 242);
      border: none;
      border-radius: 5px;
      color: white;
      margin: 2% auto;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.3s ease-out;

      &:hover {
        background: rgb(119, 130, 252);
      }
    }
    p {
      width: 80%;
      margin: 0 auto;
      color: white;
      a {
        display: block;
        width: fit-content;
        color: rgb(5, 165, 228);
        text-decoration: none;
        // text-align: left;
        transition: all 0.3s ease;
        text-transform: capitalize;
        &:hover {
          border-bottom: 2px solid rgb(5, 165, 228);
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }

  @keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3% 0;
    padding: 10px;
    font-size: 12px;
    text-transform: capitalize;
    color: #707070;
    cursor: pointer;
  }
}
</style>