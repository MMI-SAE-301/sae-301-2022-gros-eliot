<script setup lang="ts">
import { ref } from "vue";
import LogoTikTak from "../icons/LogoTikTak.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { supabase, user } from "@/supabase";

const menuState = ref(true);
</script>

<template>
  <div
    class="flex justify-between border-b-2 border-white bg-black p-4 light:border-0"
  >
    <RouterLink to="/">
      <LogoTikTak class="h-10 w-20 fill-white" />
      <span class="sr-only">Logo du site TikTak</span>
    </RouterLink>

    <!--Menu du header : MOBILE -->
    <div class="flex flex-col md:hidden">
      <button id="btnMenu" @click="menuState = !menuState" aria-controls="menu">
        <Bars3Icon class="h-10 w-10 stroke-white" />
        <span class="sr-only">Menu hamburger</span>
      </button>
    </div>

    <!--Menu du header : TAB&ORDI -->
    <div class="hidden flex-row items-center justify-center gap-4 md:flex">
      <RouterLink
        to="/montre/"
        v-if="user"
        class="w-fit text-white"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Collections</p>
      </RouterLink>
      <RouterLink
        to="/montre/new"
        v-if="user"
        class="w-fit rounded-lg bg-gold-normal py-1 px-3 font-bold text-black"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Personnaliser</p>
      </RouterLink>

      <button
        v-if="user"
        @pointerdown="supabase.auth.signOut()"
        class="w-fit rounded-lg border border-gold-normal bg-black py-1 px-3 text-gold-normal"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Se déconnecter</p>
      </button>

      <RouterLink
        v-else
        to="/connexion"
        class="w-fit rounded-lg border border-gold-normal bg-black py-1 px-3 text-gold-normal"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Se connecter</p>
      </RouterLink>
    </div>
  </div>

  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <section
    :class="{ hidden: menuState }"
    aria-labelledby="btnMenu"
    class="block w-full bg-zinc-800 md:hidden light:bg-zinc-100"
  >
    <div class="flex flex-col-reverse items-center justify-center gap-4 p-4">
      <RouterLink
        v-if="user"
        to="/montre/"
        class="w-fit"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Collections</p>
      </RouterLink>
      <RouterLink
        v-if="user"
        to="/montre/new"
        class="w-fit rounded-lg bg-gold-normal py-1 px-3 font-bold text-black"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Personnaliser</p>
      </RouterLink>

      <button
        v-if="user"
        @pointerdown="supabase.auth.signOut()"
        class="w-fit rounded-lg border border-gold-normal py-1 px-3 text-gold-normal light:border-black light:text-black"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Se déconnecter</p>
      </button>

      <RouterLink
        v-else
        to="/connexion"
        class="w-fit rounded-lg border border-gold-normal py-1 px-3 text-gold-normal light:border-black light:text-black"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Se connecter</p>
      </RouterLink>
    </div>
  </section>
</template>
