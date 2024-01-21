<script setup lang="ts">
import type { IHeaderItem } from '~/types';

const navBar: IHeaderItem[] = [
  {
    name: 'home',
    link: '/main',
  },
  {
    name: 'about us',
    link: '/about-us',
  },
  {
    name: 'contact us',
    link: '/contact-us',
  },
];

async function openInternalLink(link: string): Promise<void> {
  await navigateTo(link);
}
</script>
<template>
  <div class="header">
    <div class="header__desctop">
      <!-- <button @click="openInternalLink(navItem.link)" v-for="navItem in navBar" class="btn">{{navItem.name}}</button> -->
      <NuxtLink v-for="navItem in navBar" v-slot="{ isActive }" :to="navItem.link" :title="navItem.name">
        <span :class="isActive ? 'header__link-active' : 'header__link'"> {{ navItem.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  &__desctop {
    display: flex;
    gap: 20px;

    .btn {
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  &__link {
    color: black;
  }

  &__link-active {
    color: blue;
  }
}
</style>
