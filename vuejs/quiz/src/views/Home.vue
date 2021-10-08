<template>
  <div class="home">
    <Form />
    <!-- <div id="slide" V-on="con"></div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App kcn"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Button from '@/components/Button.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // Button,
    Form
  }
}

 
</script>

<style lang="scss">
  .home{
    width: 100%;
    min-height: 100vh;
    margin: -3vh;
    padding: 0;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
