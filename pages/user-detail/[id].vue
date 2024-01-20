<script setup lang="ts">
import { getRequest } from '~/composables/user-http';

const route = useRoute();
const userId = route.params.id;
const userData: any = ref<any>(null);

//short variant
// const userData:any = await getRequest(userId.toString());

//same as onInit() in angular
onMounted(async () => {
    await getUserInfo()
});

async function getUserInfo(): Promise<any> {
    try {
        const result = await getRequest(userId.toString());
        if (result) userData.value = result;

        setTimeout(() => userData.value.title = 'cahnged', 2000)
    } catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <p class="user-detail-page">{{ userData?.title }}</p>
</template>