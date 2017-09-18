<template>
  <div class="outer-container">
    <div class="inner-container">
      <Contact></Contact>
      <Profile></Profile>
    </div>
    <div class="inner-container">
      <Career></Career>
      <Education></Education>
      <Skill></Skill>
    </div>
  </div>
</template>

<script lang="ts">
  import Contact from '../components/Contact.vue'
  import Profile from '../components/Profile.vue'
  import Skill from '../components/Skill.vue'
  import Career from '../components/Career.vue'
  import Education from '../components/Education.vue'
  import constants from '../constants.js'

  export default {
    name: 'resume',
    components: {
      Contact,
      Profile,
      Skill,
      Career,
      Education,
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
    margin: 20px auto;
  }
</style>

