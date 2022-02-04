<template>
  <main>
    <header>
      <h1>welcome to</h1>
      <span>coders site</span>
    </header>
    <div class="main">
      <div class="content">
        <button @click="signup = true">
          <routerLink to="/" class="route">sign up</routerLink></button
        ><button>
          <routerLink to="/Users" class="route">view users</routerLink></button
        ><button>
          <routerLink to="/" class="route">log in</routerLink>
        </button>
      </div>
      <div class="auth" v-if="signup">
        <div class="form">
          <h1>coders site</h1>
          <div class="inputs">
            <div>
              <label for="username">name:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter name...." v-model="username"
              />
            </div>
            <div>
              <label for="userage">age:</label>
              <input
                type="number"
                name="userage"
                id="userage"
                placeholder="Enter age...." v-model="age"
              />
            </div>
            <div>
              <label for="userlocation">location:</label>
              <input
                type="text"
                name="userlocation"
                id="userlocation"
                placeholder="Enter location...." v-model="location"
              />
            </div>
            <div>
              <label for="userprogram">program:</label>
              <input
                type="text"
                name="userprogram"
                id="userprogram"
                placeholder="Enter program...." v-model="program"
              />
            </div>
            <div>
              <label for="usersex">sex:</label>Male
              <input
                type="radio"
                name="usersex"
                id="male"
                placeholder="Enter sex...." v-model="male"
              />
              Female<input type="radio" name="usersex" id="female" v-model="female" />
            </div>
          </div>
          <div class="buttons">
            <button @click="postToDB();">sign up</button>
            <button @click="signup = false">close</button>
          </div>
          <span>CodingHerald</span>
        </div>
      </div>
    </div>
    <footer>&copy;2k22_CodingHerald.com</footer>
  </main>
</template>
<script>
import { ref } from "vue";
import axios from 'axios'
export default {
  name: "landingpage",
  setup() {
    const signup = ref(false);
const username = ref('')
const location = ref('')
const age = ref(Number)
const male = ref(Boolean)
const female = ref(Boolean)
const program = ref('')
    const postToDB = async() => {

      if(username.value !== '' && location.value !== '' && program.value !== ''  && age.value >= 10 && (male.value || female.value)) {
          await axios.Post('http://localhost:4000/api/students', {
          method: "Post",
          body: JSON.stringify({
            name: this.username,
            email: this.email,
            password: this.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(res =>{
          console.log('this is posting');
           console.log(res)}).catch(err => console.error(err))
      } else {
        console.log('invalid post body. request not sent');
      }
   
    }

    return {
      username,age,male,female,location,program,
      signup,
      postToDB
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(23, 174, 224, 0.632) 0%,
    rgba(9, 83, 167, 0.632) 100%
  );
  background-attachment: fixed;
}
header {
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-family: monospace;
    text-transform: capitalize;
    text-align: center;
    color: rgb(158, 115, 7);
  }

  span {
    display: block;
    font-size: 80px;
    font-family: "Russo One", sans-serif;
    font-weight: 700;
    padding: 15px 0;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
    text-transform: capitalize;
  }
}

.main {
  width: 100vw;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;

  .content {
    width: 80%;
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    button {
      width: 250px;
      height: 80px;
      display: block;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background: rgb(179, 92, 92);
      position: relative;
      top: -50px;

      &:hover {
        border-radius: 50%;
        height: 120px;
      }

      &:active {
        transform: scale(0.8);
      }

      .route {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 500;
        color: white;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;
      }
    }
  }
}

.auth {
  width: 450px;
  height: 530px;
  background: white;
  border-radius: 4px;

  .form {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 20px;

    h1 {
      text-align: center;
      text-transform: capitalize;
      font-weight: 600;
      padding: 14px 10px;
      font-size: 40px;
      font-family: "Russo One", sans-serif;
      color: tomato;
    }
    .inputs {
      width: 90%;
      margin: 0 auto;
      padding: 13px 10px;
      background: rgba(223, 222, 222, 0.87);
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        label {
          text-transform: capitalize;
          font-weight: 500;
          font-size: 18px;
          color: rgb(59, 58, 58);
        }
        input {
          width: 270px;
          height: 45px;
          outline: none;
          background: white;
          border-radius: 3px;
          padding-left: 16px;
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
          color: rgb(56, 53, 53);
        }
        #male,
        #female {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
    .buttons {
      width: 90%;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 40%;
        height: 60px;
        border-radius: 4px;
        border: none;
        background: skyblue;
        transition: all 0.3s ease;
        color: var(--bs-dark);
        font-weight: 500;
        font-size: 21px;

        &:last-child {
          background: tomato;
          color: white;
        }
      }
    }
    span {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--bs-dark);
      font-weight: 400;
      font-size: 16px;
      opacity: 0.84;
    }
  }
}
footer {
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(245, 245, 245, 0.774);
  font-size: 20px;
  opacity: 0.8;
}
</style>