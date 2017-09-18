<template>
  <div class="container">

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

  const {
    contact: {
      location,
      mobile,
      github,
      email,
      link,
    },
  } = constants;

  export default {
    name: 'profile',
    data() {
      return {
        mobile,
        location,
        email,
        envelope,
        mapMarker,
        phone,
        github,
        octocat,
        link,
      }
    }
  }
</script>

<style scoped>
  .container {
    display: inline-block;
    width: 300px;
    vertical-align: bottom;
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
