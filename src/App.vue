<script setup lang="ts">
import HeaderView from "@/components/layout/HeaderView.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>

<template>
  <header>
    <HeaderView />
  </header>

  <main>
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-4 p-2" />
    </Suspense>
  </main>
</template>
