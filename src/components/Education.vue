<template>
  <section class="container">
    <header class="title">
      <img class="icon" :src="book" alt="">
      <span>教育经历</span>
    </header>
    <div>
      <div v-for="e in education">
        <span class="during">{{e.during}}</span>
        <span class="school">{{`${e.school} / ${e.degree}`}}</span>
        <span class="major">{{e.major}}</span>
      </div>
    </div>
  </section>
</template>

<script>
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
    padding: 0 20px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .during,
  .school,
  .major {
    margin-right: 20px;
  }
</style>
