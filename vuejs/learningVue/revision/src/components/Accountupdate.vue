<template>
  <div class="update">
    <Child btnName="update profile" />
    <input type="text" list="update" />
    <dataList id="update">
      <option v-for="name of register" :key="name.name" :value="registerName">
        {{ name.name }}
      </option>
      <option v-for="name of register" :key="name.email" :value="registerName">
        {{ name.email }}
      </option>
      <!-- <option :value="registerEmail"></option> -->
    </dataList>
  </div>
</template>

<script>
export default {
  name: "Accountupdate",
};
</script>

<style lang="css" scoped>
</style>