<template>
  <section class="container">
    <header class="title">
      <img class="icon" :src="laptop" alt="">
      <span>工作经验</span>
    </header>
    <div class="career" v-for="c in career">
      <div class="company">{{c.company}}</div>
      <div class="post">{{c.post}}</div>
      <div class="during">{{c.during}}</div>
      <ul class="projects-list">
        <li class="project" v-for="project in c.projects">
          {{project}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import laptop from '../svg/laptop.svg';
  import constants from '../constants';

  const {
    career,
  } = constants;

  export default {
    name: 'career',
    data() {
      return {
        laptop,
        career,
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
    width: 25px;
    height: 25px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .career {
    margin-bottom: 20px;
  }

  .company {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .post {
    font-size: .8rem;
  }

  .during {
    font-size: .8rem;
    color: #888;
    margin-bottom: 10px;
  }

  .projects-list {
    margin: 0;
    padding: 0;
    list-style: inside;
    line-height: 1.6rem;
  }

  .project {
    margin-bottom: 8px;
  }

</style>
