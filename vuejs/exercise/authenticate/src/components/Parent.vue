<template>
  <div
    class="bg-gradient-to-br from-gray-700 via-gray-500 to-gray-800 w-full h-full p-8 flex flex-col justify-evenly items-center"
  >
    <h2
      class="text-center font-bold  font-sans uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-400 text-8xl  break-words leading-normal py-8"
    >
      coding made easy...
    </h2>
    <p class="text-center text-gray-300 text-2xl">
      simple, fast, easy and scalable CSS library.
    </p>
    <br />
    <h1
      class="text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 font-bold font-sans to-blue-300 capitalize text-8xl block py-8"
    >
      tailwindCSS
    </h1>
    <button
      class="w-96 h-20 text-3xl bg-indigo-500  text-gray-200 font-sans font-bold capitalize m-auto rounded hover:bg-yellow-600 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-700  duration-300 block "
    >
      <a href="#started">get started</a>
    </button>
    <canvas
      class="w-72 opacity-10 h-72 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full absolute bottom-8 left-56"
    ></canvas>
    <canvas
      class="w-32 opacity-10 h-32 bg-green-400 rounded-full absolute bottom-20 right-72"
    ></canvas>
    <canvas
      class="w-72 opacity-10 h-72 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full absolute right-16 top-16"
    ></canvas>
  </div>
  <div class="vue w-full h-fit pt-8">
    <div class=" flex justify-center items-center">
      <img class="logo w-auto h-52 block" src="../assets/logo.png" alt="" />
    </div>
    <h1 class="text-center capitalize text-4xl text-green-900 font-bold py-3">
      learn <span class="text-6xl text-green-500">Vuejs</span>
    </h1>
    <p>
      a progressive javascript framework for building scalable applications and
      more...
    </p>
    <button
      @click="getTime()"
      class="m-auto block rounded w-52 h-16 bg-green-900 mt-8 text-white capitalize"
    >
      try this current time update with Vuejs
    </button>
    <p class="getTime text-center pt-8 font-bold text-2xl">{{ normalTime }}</p>
  </div>
  <div id="started" class="w-full h-fit pb-16 bg-white">
    <h1 class="text-center capitalize py-8 text-2xl text-green-900">
      Learn
      <span class="text-green-500 capitalize text-6xl font-bold">vuejs</span>
      &
      <span class="text-blue-300 capitalize text-6xl font-bold"
        >tailwindCSS</span
      >
    </h1>
    <p class="text-center p-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur esse
      cumque illo minima hic obcaecati cupiditate incidunt officia praesentium,
      rerum provident aut libero tenetur error! Earum voluptates quasi nesciunt
      maxime saepe. Non officiis aut expedita. Reprehenderit architecto libero
      corporis illo nam labore provident culpa ab veritatis est enim quo, magni
      sapiente hic praesentium fugit voluptas dolorem deserunt? Veritatis enim
      debitis perspiciatis nesciunt. Aliquid incidunt, deleniti inventore
      suscipit voluptas vel est neque quasi minus cum assumenda quas facilis
      unde corporis eum, laudantium similique libero. Pariatur provident id
      incidunt illo nobis. Voluptates facilis ea voluptate, doloremque
      necessitatibus consectetur impedit eum illo aliquam!
    </p>
    <button
      class="w-96 h-20 text-3xl bg-green-500  text-gray-200 font-sans font-bold capitalize m-auto rounded hover:bg-yellow-600 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-700  duration-300 block "
    >
      <a href="/">get CDN links</a>
    </button>
  </div>
</template>

<script>
import { reactive, computed, ref } from "vue";
export default {
  name: "Parent",

  setup() {
    const data = reactive({
      users: [
        {
          name: "user 1",
          age: 33,
          email: "johndoe@gmail.com",
          books: ["fasting", "living upright"],
        },
        {
          name: "user 2",
          age: 33,
          email: "johndoe@gmail.com",
        },
        {
          name: "user 3",
          age: 33,
          email: "johndoe@gmail.com",
          books: [
            "standing firm",
            "waliking like Christ",
            "you are unstopable",
            "going through challenges? do this",
          ],
        },
        {
          name: "user 4",
          age: 33,
          email: "johndoe@gmail.com",
        },
      ],
    });

    let normalTime = ref(new Date());

    const getTime = computed(() => {
      return normalTime;
    });

    console.log(data);
    return {
      data,
      normalTime,
      getTime,
    };
  },
};
</script>
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
*,
body {
  padding: 0;
  margin: 0;
}
</style>
