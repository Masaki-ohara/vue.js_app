<template>
  <div>
   <LikeHeader>
     <h2>みなさん</h2>
     <template v-slot:title>
       <h2>こんにちは</h2>
     </template>
     <h3>はじめまして</h3>
      <template v-slot:number>
        <p>{{number}}</p>
      </template>
      <p>宜しくお願いします</p>
   </LikeHeader>
   <LikeNumber :total-number="number" @my-click="incrementNumber"></likeNumber>
   <LikeNumber :total-number="number"></likeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
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