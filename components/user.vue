<script setup lang="ts">
const props = defineProps<{
  userData: any;
}>();

//@Output() event-emmitter
const emit = defineEmits(['userClickCallback']);

function onOpenUserDetailPageBtnClick(userId: string): void {
  emit('userClickCallback', userId);
}
</script>

<template>
  <div class="user">
    <p class="user__name">{{ props.userData.firstName }}</p>
    <p class="user__age">{{ props.userData.email }}</p>
    <button @click="onOpenUserDetailPageBtnClick(props.userData._id)" class="btn">Open details</button>
  </div>
</template>
<style lang="scss" scoped>
.user {
  &__name {
    color: red;
  }

  &__age {
    color: green;
  }
}
</style>
