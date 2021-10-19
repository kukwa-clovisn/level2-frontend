<template>
  <button class="text-white rounded-xl capitalize" @click="toggling()">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  name: "Child",
  props: {
    btnName: String,
  },
  emits: ["toggle"],
  methods: {
    toggling() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="css" scoped>
button {
  min-width: 130px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: rgba(158, 9, 83, 0.877);
  color: white;
  margin: 2% auto;
  padding: 5px 15px;
  display: block;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.4s ease;
}

button.active {
  background: teal;
}

button:active {
  transform: scale(0.85);
}
</style>