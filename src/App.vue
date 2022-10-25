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
      <router-view class="m-2 border-2 p-2" />
    </Suspense>
  </main>
</template>
