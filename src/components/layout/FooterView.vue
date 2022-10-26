<script setup lang="ts">
import LogoTikTak from "../icons/LogoTikTak.vue";
import { supabase, user } from "@/supabase";
</script>

<template>
  <section
    class="flex h-fit w-full flex-col items-center justify-between gap-5 border-t-2 border-white bg-black p-8 pb-20 md:flex-row"
  >
    <div class="flex flex-col gap-5 p-4">
      <LogoTikTak class="h-fit w-48 fill-white" />
      <p class="text-xs">Eliot Gros B1, projet étudiant (SAÉ 301)</p>
    </div>

    <div
      class="grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1"
    >
      <div class="flex flex-col gap-3 text-gold-normal">
        <h4 class="font-bold">Général</h4>
        <ul>
          <RouterLink to="/confidentialite">
            <li>CGV</li>
          </RouterLink>
          <RouterLink to="/confidentialite">
            <li>CGU</li>
          </RouterLink>
          <RouterLink to="/confidentialite">
            <li>Mentions légales</li>
          </RouterLink>
        </ul>
      </div>

      <div class="flex flex-col gap-3 text-gold-normal" v-if="user">
        <h4 class="font-bold">Pages principales</h4>
        <ul>
          <RouterLink to="/montre/new">
            <li>Personnalisation</li>
          </RouterLink>
          <RouterLink to="/montre/">
            <li>Votre collection</li>
          </RouterLink>
        </ul>
      </div>
      <div class="flex flex-col gap-3 text-gold-normal" v-else>
        <h4 class="font-bold">Pages principales</h4>
        <ul>
          <RouterLink to="/connexion">
            <li>Personnalisation</li>
          </RouterLink>
          <RouterLink to="/connexion">
            <li>Votre collection</li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </section>
</template>
