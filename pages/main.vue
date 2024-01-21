<script setup lang="ts">
import { defaultRequest } from '~/composables/user-http';

const usersList = ref(null);

onMounted(async () => {
  await getUsersList();
});

async function getUsersList(): Promise<any> {
  try {
    const result = await defaultRequest('GET', 'users');
    if (result) usersList.value = result;
  } catch (error) {
    console.log(error);
  }
}

function openUserDetailPage(userId: string): void {
  openInternalLink(`/user-detail/${userId}`);
}

function openInternalLink(link: string): void {
  navigateTo(link);
}
</script>
<template>
  <div class="main-page">
    <User v-for="user in usersList" :userData="user" @userClickCallback="openUserDetailPage" />
  </div>
</template>
