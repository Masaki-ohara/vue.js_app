<template>
  <div>
   <LikeHeader></LikeHeader>
   <LikeNumber></likeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  components: {
    LikeHeader: LikeHeader
  }
}
</script>