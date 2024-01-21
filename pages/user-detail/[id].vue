<script setup lang="ts">
import { defaultRequest } from '~/composables/user-http';
import * as yup from 'yup';

const route = useRoute();
const userId = route.params.id;
const userData: any = ref<any>(null);
const schema = yup.object({
  email: yup.string().email('It should a valid email').required('Required field'),
  name: yup.string().required('Name should not be empty'),
});

//short variant
// const userData:any = await defaultRequest('GET',userId.toString());

//same as onInit() in angular
onMounted(async () => {
  await getUserInfo();
});

async function getUserInfo(): Promise<any> {
  try {
    const result = await defaultRequest('GET', `users/${userId.toString()}`);
    if (result) userData.value = result;

    // setTimeout(() => userData.value.title = 'cahnged', 2000)
  } catch (error: any) {
    console.log(error?.data.message);
  }
}

function onSubmit(values: any): void {
  console.log(values);
}
</script>
<template>
  <p class="user-detail__email">{{ userData?.email }}</p>
  <p class="user-detail__name">{{ userData?.firstName }}</p>
  <!-- <Form @submit="onSubmit" :validation-schema="schema">
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <Field name="name" type="name"/>
        <ErrorMessage name="name" />
        <button>Submit</button>
    </Form>
    <button @click="getFormValue()">get form</button> -->
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    v-slot="{ meta, errors }"
    :initial-values="{ email: userData?.email, name: userData?.firstName }"
  >
    <Field name="email" type="email" v-slot="{ field, errorMessage }">
      <input class="user-detail__input" v-bind="field" type="text" />
      <span v-if="errors.email" class="user-detail__input-err-msg">{{ errorMessage }}</span>
    </Field>
    <Field name="name" type="name" v-slot="{ field, errorMessage }">
      <input :class="errorMessage ? 'user-detail__input-err' : 'user-detail__input'" v-bind="field" type="text" />
      <span v-if="errors.name" class="user-detail__input-err-msg">{{ errorMessage }}</span>
    </Field>
    <button :disabled="!meta.valid">Submit</button>
  </Form>
</template>
<style lang="scss" scoped>
.user-detail {
  &__input-err {
    border: solid 1px red;
  }

  &__input-err-msg {
    color: red;
  }
}
</style>
