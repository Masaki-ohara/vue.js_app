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
   <div>
     <h2>イベントのフォーム</h2>
     <label for="title">タイトル</label>
     <input 
       id="title"
       type="text"
       v-model="eventData.title"
       >
        <P>{{eventData.title}}</P>
   </div>
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
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
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

