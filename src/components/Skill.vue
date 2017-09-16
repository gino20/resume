<template>
  <section class="container">
    <header class="title">主要技能</header>
    <ul class="list">
      <li class="skill-pack" v-for="pack in skills">
        <div class="skill" v-for="(skill, index) in pack">
          <span>{{skill}}</span>
          <span v-if="index !== pack.length - 1">, </span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import constants from '../constants';

  const {
    skills,
  } = constants;

  export default {
    name: 'skill',
    data() {
      return {
        skills,
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 0 20px;
  }

  .title {
    font-size: 1.2rem;
    line-height: 2rem;
    border-bottom: solid 1px #bbb;
  }

  .list {
    margin: 0;
    padding: 10px 20px;
  }

  .skill-pack {
    line-height: 1.6rem;
  }

  .skill {
    display: inline-block;
    margin-right: 4px;
  }
</style>
