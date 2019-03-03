<template>
  <div>
    <header class="title">个人简介</header>
    <ul class="list">
      <li class="item" v-for="item in brief">
        {{item}}
      </li>
    </ul>
  </div>  
</template>

<script lang="ts">
import constants from '../constants';
const {brief} = constants;

export default {
  name: 'brief',
  data() {
    return {
      brief,
    };
  },
};
</script>

<style>
  .title {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #359CCF;
    font-weight: 600;
    border-bottom: solid 1px #bbb;
  }

  .list {
    margin: 0;
    padding: 10px 20px;
  }
  
  .item {
    line-height: 1.6rem;
  }
</style>