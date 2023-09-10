<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        lastName: "Jack"
      }
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>

