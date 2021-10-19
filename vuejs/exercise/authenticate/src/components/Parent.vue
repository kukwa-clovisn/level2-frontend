<template>
  <div>this is the parent</div>
  <input
    type="text"
    v-model="val"
    placeholder="say something..."
    class="
      bg-blue-200
      text-black
      rounded-2xl
      outline-none
      placeholder-purple-800
      p-3
      m-3
      w-72
    "
  />
  <button
    @click="set()"
    class="rounded bg-purple-600 text-white capitalize p-2 m-3"
  >
    click me
  </button>
</template>

<script>
export default {
  name: "Parent",
  val: "",
  data() {
    return {
      database: [],
    };
  },

  emits: ["sound"],
  methods: {
    set() {
      if (this.val !== "") {
        this.database.push(this.val);
        localStorage.setItem("try", this.database);
        this.$emit("sound");
        this.val = "";
      } else {
        alert("write something please....");
      }
    },
  },
};
</script>

<style lang="css">
button {
  min-width: 100px;
  transition: all 0.3s ease;
}
button:active {
  transform: scale(0.8);
}
</style>