<template>
  <div class="content d-flex justify-content-between align-items-start">
    <div class="left-content">
      <h1 class="text-center text-uppercase text-white py-3">
        random user api
      </h1>
      <h1 class="text-white text-capitalize text-center">{{ username }}</h1>
      <div :class="{ color: active }" id="image">
        <img :src="img" alt="" />
      </div>
      <button
        class="btn rounded bg-white p-2 m-4 text-capitalize text-danger"
        @click="myFunction()"
      >
        {{ btnName }}
      </button>
    </div>
    <div class="right-content">
      <table class="table table-success table-striped table-hover">
        <thead>
          <tr>
            <th class="text-uppercase py-4" colspan="2">details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-capitalize">name</td>
            <td><i class="fa fa-user detail"></i> {{ username }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">email-address</td>
            <td><i class="fa fa-envelope detail"></i> {{ email }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">gender</td>
            <td><i class="fa fa-user detail"></i> {{ gender }}</td>
          </tr>
          <tr>
            <td>DOB</td>
            <td><i class="fa fa-user-circle detail"></i>{{ dob }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">age</td>
            <td><i class="fa fa-user-alt detail"></i>{{ age }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">country</td>
            <td><i class="far fa-flag detail"></i>{{ country }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">city</td>
            <td><i class="fa fa-city detail"></i>{{ city }}</td>
          </tr>

          <tr>
            <td class="text-capitalize">state</td>
            <td><i class="fa fa-building detail"></i>{{ state }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">street name</td>
            <td><i class="fa fa-house-user"></i>{{ streetName }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">street number</td>
            <td><i class="fas fa-list-ol detail"></i>{{ streetNumber }}</td>
          </tr>
          <tr>
            <td class="text-capitalize">phone</td>
            <td><i class="fa fa-phone-alt detail"></i>{{ phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";

// Vue.use(VueAxios, axios);
export default {
  name: "Weather",
  data() {
    return {
      btnName: "random user",
      username: "",
      img: "",
      dob: "",
      age: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      streetNumber: "",
      streetName: "",
      state: "",
      active: false,
      gender: "",
    };
  },
  mounted() {
    this.myFunction();
  },

  methods: {
    myFunction() {
      axios.get("https://randomuser.me/api/").then((res) => {
        console.log(res.data.results[0]);
        console.log(res.data.results[0].location.street.name);
        this.username =
          res.data.results[0].name.title +
          " " +
          res.data.results[0].name.first +
          " " +
          res.data.results[0].name.last;
        console.log(res.data.results[0].picture.medium);

        this.img = res.data.results[0].picture.large;

        this.dob = res.data.results[0].dob.date;

        this.age = res.data.results[0].dob.age;

        this.phone = res.data.results[0].phone;

        this.email = res.data.results[0].email;

        this.city = res.data.results[0].location.city;

        this.country = res.data.results[0].location.country;

        this.state = res.data.results[0].location.state;

        this.streetNumber = res.data.results[0].location.street.number;

        this.streetName = res.data.results[0].location.street.name;

        this.gender = res.data.results[0].gender;

        if (this.gender === "female") {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.content {
  width: 100vw;
  height: 100%;
  background: inherit;
  flex-wrap: wrap;
  padding: 0 30px;
}

.right-content {
  position: relative;
  min-width: 600px;
  margin: auto;
}

.right-content table {
  width: 100%;
}

.right-content table tr {
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.right-content table tr:hover {
  background: rgb(122, 199, 224);
}

.right-content table td {
  text-align: left;
  padding: 10px 20px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right-content table .detail {
  margin-right: 15px;
}

.left-content {
  width: 400px;
  margin: 2% auto;
}
h1 {
  cursor: pointer;
  font-size: 25px;
}

#image {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid white;
  overflow: hidden;
}

#image img {
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
}

#image.color {
  border: 6px solid rgb(9, 168, 231);
}

button {
  min-width: 150px;
  transition: all 0.5s ease;
}

button:hover {
  background: tomato;
  color: white;
}

button:active {
  transform: scale(0.8);
}
.respond {
  width: 100%;
  height: 50vh;
  background: white;
  border-radius: 3px;
}
</style>

