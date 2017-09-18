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
    <div class="contact">
      <div>
        <img class="icon" :src="phone" alt="">
        <span class="text">{{mobile}}</span>
      </div>
      <div>
        <img class="icon" :src="envelope" alt="">
        <span class="text">{{email}}</span>
      </div>
      <div>
        <img class="icon" :src="octocat" alt="">
        <span class="text">{{github}}</span>
      </div>
      <div>
        <img class="icon" :src="mapMarker" alt="">
        <span class="text">{{location}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import constants from '../constants';
  import envelope from '../svg/envelope.svg';
  import mapMarker from '../svg/map-marker.svg';
  import phone from '../svg/phone.svg';
  import octocat from '../svg/github.svg';
  import externalLink from '../svg/external-link.svg';

  const {
    contact: {
      location,
      mobile,
      github,
      email,
      link,
    },
    name,
    post,
  } = constants;

  export default {
    name: 'profile',
    data() {
      return {
        mobile,
        location,
        email,
        name,
        envelope,
        mapMarker,
        phone,
        post,
        github,
        octocat,
        link,
        externalLink,
      }
    }
  }
</script>

<style scoped>
  .container {
    display: inline-block;
    width: 300px;
    padding: 0 20px;
    vertical-align: bottom;
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
    color: #888;
    cursor: pointer;
  }

  .contact {
    padding: 8px 0;
  }

  .icon {
    width: 18px;
    height: 18px;
    vertical-align: text-bottom;
    margin-right: 2px;
  }

  .text {
    line-height: 1.8rem;
    font-size: .9rem;
  }
</style>
