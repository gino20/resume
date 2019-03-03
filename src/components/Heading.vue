<template>
  <div class="container">
    <div class="name">
      {{name.chinese}}
    </div>
    <div class="post">
      {{post}}
    </div>
    <a class="link" :href="link">
      <img class="icon link-icon" :src="externalLink" alt="">
      {{link}}
    </a>
  </div>
</template>

<script lang="ts">
import constants from '../constants';
import externalLink from '../svg/external-link.svg';

const {
  name,
  post,
  link,
} = constants;

export default {
  name: 'heading',
  data() {
    return {
      name,
      post,
      link,
      externalLink,
    };
  },
};
</script>

<style scoped>
  .container {
    width: 660px;
    margin: auto;
    padding: 30px 0;
    border-bottom: 2px solid #000;
  }

  .name {
    font-size: 1.8rem;
    margin-bottom: 5px;
    color: #359CCF;
    font-weight: 600;
  }

  .post {
    font-size: 1rem;
    color: #888;
    font-style: italic;
    margin-bottom: 5px;
  }

  .link {
    font-size: .9rem;
    color: #888;
    cursor: pointer;
  }

  .icon {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 2px;
  }
</style>
