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
      <span class="sr-only">Logo de notre site TiK TaK</span>
      <p class="text-xs text-white">Eliot Gros B1, projet étudiant (SAÉ 301)</p>
    </div>

    <div
      class="grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1"
    >
      <div class="flex flex-col gap-3 text-gold-normal">
        <p class="font-bold">Général</p>
        <ul class="font-thin">
          <li><RouterLink to="/confidentialite">CGV</RouterLink></li>

          <li><RouterLink to="/confidentialite">CGU</RouterLink></li>

          <li>
            <RouterLink to="/confidentialite">Mentions légales</RouterLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3 text-gold-normal" v-if="user">
        <p class="font-bold">Pages principales</p>
        <ul class="font-thin">
          <li><RouterLink to="/montre/new">Personnalisation</RouterLink></li>

          <li><RouterLink to="/montre/">Votre collection</RouterLink></li>
        </ul>
      </div>
      <div class="flex flex-col gap-3 text-gold-normal" v-else>
        <p class="font-bold">Pages principales</p>
        <ul class="font-thin">
          <li><RouterLink to="/connexion">Personnalisation</RouterLink></li>

          <li><RouterLink to="/connexion">Votre collection</RouterLink></li>
        </ul>
      </div>
    </div>
  </section>
</template>
