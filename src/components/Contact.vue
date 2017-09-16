<template>
  <div class="container">
    <div class="name">
      {{name.chinese}}
    </div>
    <div class="post">
      {{post}}
    </div>
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
        <img class="icon" :src="mapMarker" alt="">
        <span class="text">{{location}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import constants from '../constants.js';
  import envelope from '../svg/envelope.svg';
  import mapMarker from '../svg/map-marker.svg';
  import phone from '../svg/phone.svg';

  const {
    contact: {
      location,
      mobile,
      email,
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
      }
    }
  }
</script>

<style scoped>
  .container {
    display: inline-block;
    width: 300px;
    padding: 20px;
    vertical-align: top;
  }

  .name {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }

  .post {
    font-size: 1rem;
    color: #888;
    font-style: italic;
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
