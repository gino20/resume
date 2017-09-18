<template>
  <div class="root">
    <Resume></Resume>
  </div>
</template>

<script lang="ts">
  import Resume from './Resume.vue';

  export default {
    components: {
      Resume
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;
    margin: 0;
    font-size: 16px;
  }

  .root {
    margin: auto;
  }

  a {
    text-decoration: none;
  }
</style>
