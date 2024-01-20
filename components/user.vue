<script setup lang="ts">
const props = defineProps<{
  userData: any;
}>();

async function openInternalLink(link: string): Promise<void> {
    await navigateTo(link)
}
</script>

<template>
  <div class="user">
    <p class="user__name">{{ props.userData.name }}</p>
    <p class="user__age">{{ props.userData.age }}</p>
    <button @click="openInternalLink(`/user-detail/${props.userData.id}`)" class="btn">Open details</button>
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
