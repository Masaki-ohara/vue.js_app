<template>
  <div>
   <LikeHeader></LikeHeader>
   <h2>{{ number }}</h2>
   <LikeNumber :total-number="number" v-on:my-click="number = $event"></likeNumber>
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