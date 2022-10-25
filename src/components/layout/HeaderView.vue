<script setup lang="ts">
import LogoTikTak from "../icons/LogoTikTak.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { supabase, user } from "@/supabase";

const props = defineProps({
  menuState: { type: Boolean, default: true },
});
</script>

<template>
  <div class="flex justify-between border-b-2 border-white bg-black p-4">
    <RouterLink to="/">
      <LogoTikTak class="h-10 w-20 fill-white" />
    </RouterLink>

    <!--Menu du header : MOBILE -->
    <div class="flex flex-col md:hidden">
      <button @click="menuState = !menuState">
        <Bars3Icon class="h-10 w-10 stroke-white" />
      </button>
    </div>

    <!--Menu du header : TAB&ORDI -->
    <div class="hidden flex-row items-center justify-center gap-4 md:flex">
      <RouterLink to="/montre/" class="w-fit" @click="menuState = !menuState">
        <p class="w-fit">Collections</p>
      </RouterLink>
      <RouterLink
        to="/montre/new"
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
  <section
    :class="{ hidden: menuState }"
    class="block w-full bg-zinc-800 md:hidden"
  >
    <div class="flex flex-col-reverse items-center justify-center gap-4 p-4">
      <RouterLink to="/montre/" class="w-fit" @click="menuState = !menuState">
        <p class="w-fit">Collections</p>
      </RouterLink>
      <RouterLink
        to="/montre/new"
        class="w-fit rounded-lg bg-gold-normal py-1 px-3 font-bold text-black"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Personnaliser</p>
      </RouterLink>
      <RouterLink
        to="/connexion"
        class="w-fit rounded-lg border border-gold-normal bg-black py-1 px-3 font-bold text-gold-normal"
        @click="menuState = !menuState"
      >
        <p class="w-fit">Se connecter</p>
      </RouterLink>
    </div>
  </section>
</template>
