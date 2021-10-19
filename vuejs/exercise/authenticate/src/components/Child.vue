<template>
  <div>this is the child</div>
  <div
    @work="display()"
    class="bg-red-500 flex justify-evenly items-center column"
  >
    <li class="bg-green-400 text-white">
      {{ list }}
    </li>
  </div>
</template>

<script>
export default {
  name: "Child",
  //   list: {},
  props: ["list"],
  methods: {
    display() {
      alert("it is working");
    },
  },
};
</script>

<style lang="css">
li {
  width: 100%;
  height: 60px;
  padding: 10px;
  margin: 1% auto;
  display: block;
}
</style>