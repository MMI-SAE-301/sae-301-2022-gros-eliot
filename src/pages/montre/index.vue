<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/20/solid";
import ListeMontre from "@/components/general/ListeMontre.vue";
</script>
<template>
  <div class="p-2">
    <div
      class="flex flex-col flex-wrap items-center justify-center gap-4 p-4 md:flex-row md:justify-start md:gap-6"
    >
      <h2 class="tiktak-h2 text-center text-gold-rose light:text-black">
        Votre collection TiK·TaK
      </h2>
      <RouterLink
        to="/montre/new"
        class="tiktak-button-border flex items-center gap-1 border-gold-rose text-gold-rose light:border-black light:text-black"
      >
        <PlusIcon class="h-4 w-4" aria-hidden="true" />
        Créer une montre</RouterLink
      >
    </div>
    <ListeMontre />
  </div>
</template>
