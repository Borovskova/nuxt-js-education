<script setup lang="ts">
const usersData = [
  { name: 'Anton', age: 21, id:1 },
  { name: 'Ihor', age: 22, id:2 },
];

</script>
<template>
  <div class="main-page">
    <User v-for="user in usersData" :userData="user" />
  </div>
</template>
