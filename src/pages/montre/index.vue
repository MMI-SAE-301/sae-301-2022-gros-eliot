<script setup lang="ts">
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
        class="tiktak-button-border border-gold-rose text-gold-rose light:border-black light:text-black"
        >Créer une montre</RouterLink
      >
    </div>
    <ListeMontre />
  </div>
</template>
