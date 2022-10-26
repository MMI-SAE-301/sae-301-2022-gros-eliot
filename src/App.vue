<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
import HeaderView from "@/components/layout/HeaderView.vue";
import FooterView from "@/components/layout/FooterView.vue";
</script>

<template>
  <header class="z-50">
    <HeaderView />
  </header>

  <main class="h-full">
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-4 p-0 md:m-4 md:p-2" />
    </Suspense>
  </main>

  <footer class="z-50"><FooterView /></footer>
</template>
