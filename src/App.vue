<template>
  <div>
   <LikeHeader>
     <h3>はじめまして</h3>
     <!-- <template v-slot:[title]></template> -->
   </LikeHeader>
   <LikeNumber :total-number="number" @my-click="incrementNumber"></likeNumber>
   <button @click="currentComponent ='Home'">Home</button>
   <button @click="currentComponent = 'About'">About</button>
   <keep-alive>
     <component v-bind:is="'currentComponent'"></component>
     <About v-if="currentComponent === 'About'"></About>
     <Home v-if="currentComponent === 'Home'"></Home>
   </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";


export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home"
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
   border: 1px solid blue;
}
</style>
