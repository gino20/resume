<template>
  <section class="container">
    <header class="title">
      <img class="icon" :src="book" alt="">
      <span>教育经历</span>
    </header>
    <div>
      <div v-for="e in education">
        <span class="during">{{e.during}}</span>
        <span class="school">{{e.school + ' / ' + e.degree}}</span>
        <span class="major">{{e.major}}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import book from '../svg/book.svg';
  import constants from '../constants';

  const {
    education,
  } = constants;

  export default {
    name: 'education',
    data() {
      return {
        book,
        education,
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-bottom: 20px;
  }

  .title {
    padding-left: 10px;
    margin-bottom: 20px;
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: #359CCF;
    font-weight: 600;
    background-color: #eee;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    vertical-align: text-bottom;
  }

  .during,
  .school,
  .major {
    margin-right: 20px;
  }
</style>
