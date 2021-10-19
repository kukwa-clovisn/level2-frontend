<template>
  <button class="text-white">{{ btnName }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    btnName: String,
  },
};
</script>
<style lang="css" scoped>
button {
  width: 150px;
  height: 40px;
  background: inherit;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;
}

button:active {
  transform: scale(0.8) translateY(-30px);
}
</style>