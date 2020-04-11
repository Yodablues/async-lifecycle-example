<template>
  <div>nonasync</div>
</template>

<script>
export default {
  name: "NonAsync",
  beforeMount() {
    throw new Error("test");
  }
};
</script>
