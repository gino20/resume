<template>
  <section class="container">
    <header class="title">
      <img class="icon" :src="laptopIcon" alt="">
      <span>工作经验</span>
    </header>
    <div class="career" v-for="c in career">
      <div class="info">
        <div class="company">{{c.company}}</div>
        <div class="post">{{c.post}}</div>
        <div class="during">{{c.during}}</div>
      </div>
      <ul class="projects-list">
        <li class="project" v-for="project in c.projects">
          <div class="mission"><img class="small-icon" :src="pencilIcon" alt=""> {{project.mission}}</div>
          <div class="tech">&lt;/&gt; {{project.tech.join(', ')}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
  import laptopIcon from '../svg/laptop.svg';
  import pencilIcon from '../svg/pencil.svg';
  import constants from '../constants';

  const {
    career,
  } = constants;

  export default {
    name: 'career',
    data() {
      return {
        laptopIcon,
        career,
        pencilIcon,
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: #359CCF;
    font-weight: 600;
    background-color: #eee;
  }

  .icon {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    vertical-align: text-bottom;
  }

  .career {
    margin-bottom: 20px;
  }

  .info {
    position: relative;
    margin-bottom: 10px;
  }

  .company {
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }

  .post {
    font-size: 1rem;
  }

  .during {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: .8rem;
    color: #888;
    margin-bottom: 10px;
  }

  .projects-list {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.6rem;
  }

  .project {
    margin-bottom: 8px;
    font-size: .9rem;
  }

  .small-icon {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
    fill: #bbb;
  }
</style>
