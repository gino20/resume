<template>
  <div class="container">

    <div class="contact">
      <div>
        <img class="icon" :src="phone" alt="">&nbsp;
        <span class="text">{{mobile}}</span>
      </div>
      <div>
        <img class="icon" :src="envelope" alt="">&nbsp;
        <span class="text">{{email}}</span>
      </div>
      <div>
        <img class="icon" :src="octocat" alt="">&nbsp;
        <span class="text">{{github}}</span>
      </div>
      <div>
        <img class="icon" :src="mapMarker" alt="">&nbsp;
        <span class="text">{{location}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import constants from '@/constants';
import envelope from '@/assets/envelope.svg';
import mapMarker from '@/assets/map-marker.svg';
import phone from '@/assets/phone.svg';
import octocat from '@/assets/github.svg';

const {
  contact: {
    location,
    mobile,
    github,
    email,
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
    };
  },
};
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
