<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
import { ArrowUpCircleIcon } from "@heroicons/vue/24/outline";
// @ts-ignore
import HeaderView from "@/components/layout/HeaderView.vue";
// @ts-ignore
import FooterView from "@/components/layout/FooterView.vue";
</script>

<template>
  <header class="z-50" id="top">
    <HeaderView />
  </header>

  <main>
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-4 p-0 md:m-4 md:p-2" />
    </Suspense>
  </main>

  <footer class="z-50">
    <a href="#top">
      <ArrowUpCircleIcon
        class="stroke m-4 ml-auto h-10 w-10 stroke-white light:stroke-black"
      />
      <span class="sr-only">Retourner en haut de page</span>
    </a>
    <FooterView />
  </footer>
</template>
