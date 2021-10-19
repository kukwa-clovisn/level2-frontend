<template>
  <button>
    {{ Btnname }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    Btnname: String,
  },
};
</script>
<style lang="scss">
button {
  transition: all 0.3s ease;
  &:active {
    transform: scale(0.8);
  }
}
</style>