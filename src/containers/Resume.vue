<template>
  <div class="outer-container">
    <Heading></Heading>
    <div class="inner-container">
      <Contact></Contact>
      <Profile></Profile>
    </div>
    <div class="inner-container">
      <Career></Career>
      <Education></Education>
      <Skill></Skill>
      <Brief></Brief>
    </div>
  </div>
</template>

<script lang="ts">
  import Heading from '../components/Heading.vue';
  import Contact from '../components/Contact.vue';
  import Profile from '../components/Profile.vue';
  import Skill from '../components/Skill.vue';
  import Career from '../components/Career.vue';
  import Education from '../components/Education.vue';
  import Brief from '../components/Brief.vue';
  import constants from '../constants';

  export default {
    name: 'resume',
    components: {
      Heading,
      Contact,
      Profile,
      Skill,
      Career,
      Education,
      Brief,
    }
  }
</script>

<style scoped>
  .outer-container {
    margin: auto;
    color: #434955;
    min-height: calc(660px * (210 / 297));
  }

  .inner-container {
    width: 660px;
    margin: 15px auto;
  }
</style>

