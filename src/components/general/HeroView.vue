<script setup lang="ts">
import { supabase, user } from "@/supabase";
import { UserIcon, PlusIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <!--HERO-->
  <section
    class="m-auto flex max-w-6xl flex-col-reverse justify-center gap-10 md:flex-row"
  >
    <div class="flex flex-col gap-5 md:max-w-lg">
      <h1 class="tiktak-h1 text-gold-normal light:text-black">
        Nous attendions votre visite.
      </h1>
      <img
        src="/images/montres-hero-image.webp"
        alt="Exemples de montres"
        class="m-auto block w-72 p-4 md:m-1 md:hidden"
      />
      <div
        class="flex w-full flex-row flex-wrap justify-center gap-2 md:hidden"
      >
        <RouterLink
          to="/montre/new"
          class="tiktak-button-fill gap-1 bg-gold-normal text-black"
          >Personnaliser
          <PlusIcon class="h-5 w-5 text-black" />
        </RouterLink>
        <RouterLink
          v-if="user == null"
          to="/connexion"
          class="tiktak-button-border gap-1 border-gold-normal text-gold-normal light:border-black light:text-black"
          >Se connecter
          <UserIcon class="h-5 w-5" />
        </RouterLink>
      </div>

      <h2 class="tiktak-h2">
        Personnalisez votre montre TiK·TaK. On s’occupe du reste.
      </h2>
      <p>
        TiK·TaK est reconnue pour la personnalisation de montres connectées,
        offrant une gamme de modèles variés et facilement personnalisables.
      </p>
      <div class="hidden flex-row flex-wrap gap-2 md:flex">
        <RouterLink
          to="/montre/new"
          class="tiktak-button-fill w-fit gap-1 bg-gold-normal text-black"
          >Personnaliser
          <PlusIcon class="h-5 w-5 text-black" />
        </RouterLink>
        <RouterLink
          v-if="user == null"
          to="/connexion"
          class="tiktak-button-border w-fit gap-1 border-gold-normal text-gold-normal light:border-black light:text-black"
          >Se connecter <UserIcon class="h-5 w-5"
        /></RouterLink>
      </div>
    </div>
    <img
      src="/images/montres-hero-image.webp"
      alt="Exemples de montres"
      class="m-auto hidden w-96 p-4 md:m-1 md:block"
    />
  </section>
</template>
