<template>
  <table class="common-table">
    <thead>
      <tr>
        <td v-for="column in tableColumns" :key="column">
          {{ column.name }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="raw in tableData" :key="raw">
        <td v-for="item in tableColumns" :key="item">{{ raw[item.value].text }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CommonTableComponent',
  props: {
    tableData: Array,
    tableColumns: Array,
  },
};
</script>

<style scoped></style>
