<template>
  <section class="container">
    <table class="content">
      <tr class="row">
        <th class="table-header">性别</th>
        <td>{{gender}}</td>
      </tr>
      <tr class="row">
        <th class="table-header">工作经验</th>
        <td>{{workingYears}}</td>
      </tr>
      <tr class="row">
        <th class="table-header">出生日期</th>
        <td>{{birth}}</td>
      </tr>
      <tr class="row">
        <th class="table-header">兴趣爱好</th>
        <td>
          <span class="hobby" v-for="hobby in hobbies"> {{hobby}}</span>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
  import constants from '../constants.js';
  import envelope from '../svg/envelope.svg';
  import mapMarker from '../svg/map-marker.svg';
  import phone from '../svg/phone.svg';

  const {
    profile: {
      gender,
      workingYears,
      birth,
      github,
      hobbies,
    },
  } = constants;

  export default {
    name: 'profile',
    data() {
      return {
        gender,
        workingYears,
        birth,
        github,
        hobbies,
      }
    }
  }
</script>

<style scoped>
  .container {
    display: inline-block;
    width: 300px;
    padding: 8px 10px;
    vertical-align: bottom;
  }

  .content {
    width: 100%;
    font-size: .9rem;
    border-spacing: 5px;
  }

  .row {
    line-height: 1.2rem;
  }

  .table-header {
    text-align: right;
    border-left: 1px solid #bbb;
  }

  .hobby {
    margin-right: 5px;
  }
</style>
