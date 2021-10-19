<template>
  <div class="list">
    <h2 class="display-2 text-white text-uppercase">registration list</h2>
    <div class="items rounded p-2">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col" class="text-uppercase">usernames</th>
            <th scope="col" class="text-uppercase">email-address</th>
            <th scope="col" class="text-uppercase">status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list of register" :key="list.name">
            <th scope="row"><i class="far fa-user"></i> {{ list.index }}</th>
            <td>{{ list.name }}</td>
            <td><i class="far fa-envelope mr-5"></i> {{ list.email }}</td>
            <td>user status</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accountlisting",
  custom: [],

  data() {
    return {};
  },

  props: ["register"],

  methods: {},
};
</script>

<style lang="css" scoped>
.list {
  width: 100%;
  min-height: 20vh;
  /* background: white; */
  /* padding: 20px; */
}

.list h2 {
  padding: 10px;
  margin: 3% auto;
  font-weight: 700;
}

.list .items {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.list .items ul {
  width: 100%;
  display: block;
}

.list .items ul li {
  width: 90%;
  text-align: left;
  padding: 10px 10px 10px 20px;
  margin: 2%;
  background: rgba(180, 98, 83, 0.966);
  color: white;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  transition: all 0.3s ease;
}

.list .items ul li:hover {
  background: rgb(153, 18, 97);
  color: white;
}

.list .items ul li:active {
  transform: translate(40px);
}

.list .items ul li:focus {
  transform: scale(0.8);
}

.list .items table {
  width: 90%;
  height: 90%;
  margin: 5vh auto;
}
</style>