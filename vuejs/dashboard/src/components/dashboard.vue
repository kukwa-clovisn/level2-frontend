<template>
  <div class="template">
    <h3 class="text-center text-red-900 uppercase">payment details</h3>

    <div
      class="
        main
        flex
        justify-center
        items-center
        bg-gradient-to-r
        from-green-800
        via-teal-200
        to-green-700
      "
    >
      <div class="content bg-white">
        <div
          class="
            content-head
            headings
            flex
            justify-evenly
            items-center
            uppercase
            m-1
            p-3
          "
        >
          <span
            class="
              uppercase
              text-center text-black-500
              flex
              justify-center
              items-center
            "
            >username</span
          >
          <span
            class="
              uppercase
              text-center text-black-500
              flex
              justify-center
              items-center
            "
            >status</span
          >
          <span
            class="
              uppercase
              text-center text-black-500
              flex
              justify-center
              items-center
            "
            >user-ID</span
          >
          <span
            class="
              uppercase
              text-center text-black-500
              flex
              justify-center
              items-center
            "
            >amount</span
          >
          <span
            class="
              uppercase
              text-center text-black-500
              flex
              justify-center
              items-center
            "
            >date</span
          >
          <!-- <span></span> -->
        </div>
        <div class="body">
          <div class="_body">
            <div class="items">
              <span
                v-for="name of persons"
                :key="name.username"
                class="
                  uppercase
                  text-center text-black-300
                  flex
                  justify-center
                  items-center
                "
              >
                {{ name.username }}
              </span>
            </div>
            <div class="items">
              <span
                v-for="status of persons"
                :key="status.status"
                class="
                  text-center text-black-300
                  flex
                  justify-center
                  items-center
                "
              >
                {{ status.status }}
              </span>
            </div>
            <div class="items">
              <span
                v-for="id of persons"
                :key="id.user_id"
                class="
                  lowercase
                  text-center text-black-300
                  flex
                  justify-center
                  items-center
                "
              >
                {{ id.user_id }}
              </span>
            </div>
            <div class="items">
              <span
                v-for="amount of persons"
                :key="amount.amount"
                class="
                  uppercase
                  text-center text-black-300
                  flex
                  justify-center
                  items-center
                "
              >
                {{ amount.amount }}
              </span>
            </div>
            <div class="items">
              <span
                v-for="date of persons"
                :key="date.date"
                class="
                  uppercase
                  text-center text-black-300
                  flex
                  justify-center
                  items-center
                "
              >
                {{ date.date }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar bg-gradient-to-r from-green-300 to-green-800">
        <h1 class="text-yellow-400 text-center uppercase p-2 m-2">profile</h1>
        <h4 class="text-center text-yellow-500 capitalize">
          payunit dashboard
        </h4>
        <img src="@/assets/kjt.jpg" alt="" />
        <h1 class="text-center uppercase text-yellow-300">profile Name</h1>
        <ul>
          <li class="text-left text-white capitalize p-1">
            &uparrow;&downarrow; update profile photo
          </li>
          <li class="text-left text-white capitalize p-1">
            &uparrow;&downarrow; update profile name
          </li>
        </ul>
        <Button
          btnName="exit"
          class="text-white text-center capitalize bg-yellow-500 btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./button.vue";
export default {
  name: "Dashboard",
  online: "online",
  components: {
    Button,
  },
  data() {
    return {
      user_status: [0, 1, 1, 0, 1, 1, 0],
      users: [
        {
          users: ["jude", "Prince", "henry"],
          amount: [2000, 8000, 50000],
        },
        {
          users: ["kenry", "Loise", "julius", "sarah"],
          amount: [1000, -2000, -80000, 6000],
        },
        {
          users: ["ashil", "olive", "nissi"],
          amount: [1000, 7000, 4000],
        },
        {
          users: ["gerald", "henry", "diland", "joe"],
          amount: [2000, 3000, 1000, 4000],
        },
      ],
      groupedUsers: [],
      groupedUserNames: [],
      groupedAmounts: [],
      persons: [
        {
          status: "offline",
          username: "Jude",
          amount: 2000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Prince",
          amount: 8000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Henry",
          amount: 50000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Kenry",
          amount: 1000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Loise",
          amount: -2000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Julius",
          amount: -8000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Sarah",
          amount: 6000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Ashil",
          amount: 1000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Olive",
          amount: 7000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Nissi",
          amount: 4000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Gerald",
          amount: 2000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Henry",
          amount: 3000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Diland",
          amount: 1000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "offline",
          username: "Joe",
          amount: 4000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Gerald",
          amount: 2000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Henry",
          amount: 3000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        {
          status: "online",
          username: "Diland",
          amount: 1000,
          user_id: "1100113af3",
          date: "12-03-2021",
        },
        { status: "online", username: "Joe", amount: 4000, date: "12-03-2021" },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&family=Ubuntu:wght@300&display=swap");
h3 {
  width: 40vw;
  margin: 0 14vw;
  font-weight: 800;
  position: relative;
  top: 2vh;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  padding: 10px;
}

.template {
  width: 100vw;
  height: 75vh;
  overflow: hidden;
  overflow-y: scroll;
}
.main {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  position: relative;
  margin: 0.5% auto;
  background: white;
}

.content {
  width: 75vw;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  padding: 10px;
}
h3,
h4,
p,
h1 {
  cursor: pointer;
}

.sidebar {
  width: 25vw;
  height: 74.5vh;
  margin: 2% 0;
  position: fixed;
  top: 11vh;
  right: 0;
  overflow: hidden;
}

.sidebar img {
  width: 55%;
  border-radius: 50%;
  display: block;
  margin: 4% auto;
  cursor: pointer;
}

.sidebar ul {
  width: 100%;
}

.sidebar ul li {
  width: 90%;
  list-style-type: none;
  padding-left: 20px;
  margin-left: 12%;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.sidebar .btn {
  display: block;
  margin: 10px auto;
  color: white;
  cursor: pointer;
  background: linear-gradient(to top left, rgb(119, 0, 255) 0%, teal 100%);
}

.content .content-head span {
  width: 20%;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
}

.body {
  width: 100%;
}

._body {
  display: flex;
  width: 100%;
}

.items {
  width: 100%;
  display: block;
}

.items span {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  vertical-align: middle;

  border: 0.4px solid green;
  border-right: none;
  font-family: "Poppins", sans-serif;
}

.body div span:hover {
  background: linear-gradient(to bottom, black 0%, gray 100%);
  color: white;
  cursor: pointer;
}

.body div span:active {
  transform: scale(1.1) translateZ(50px);
  background: teal;
}
</style>