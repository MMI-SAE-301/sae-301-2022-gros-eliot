<script setup lang="ts">
import HeroView from "@/components/general/HeroView.vue";
import { supabase, user } from "@/supabase";
</script>

<template>
  <!--Contenu de la page accueil-->
  <section class="flex flex-col gap-40 md:gap-60">
    <!--Hero page accueil-->
    <HeroView class="p-2 md:p-6" />

    <!--GOLDEN WATCH ONE-->
    <section class="grid grid-cols-2 justify-items-center gap-0 md:p-2">
      <img
        src="/images/ellipse-rose.svg"
        alt="Ellipse de décoration"
        class="absolute inset-x-0 -z-10 h-1/2 w-full"
      />
      <img
        src="/images/golden-watch-one-tiktak.png"
        alt=""
        class="w-32 md:w-52"
      />
      <div class="flex flex-col gap-2">
        <h2 class="text-4xl font-black uppercase md:text-7xl">
          Golden Watch One TiK·TaK
        </h2>
        <p class="font-bold uppercase">// Édition limitée</p>
        <p class="mx-auto my-2">
          Or rose, cuir noir / Boîtier de 45 mm (199,99€)
        </p>
        <p
          class="tiktak-button-fill mx-auto hidden bg-gold-normal text-black md:block"
        >
          Commander
        </p>
      </div>
      <p
        class="tiktak-button-fill col-span-2 m-auto my-4 bg-gold-normal text-black md:hidden"
      >
        Commander
      </p>
    </section>
  </section>

  <!--COLLECTION TIKTAK-->
  <section class="m-0 flex w-full flex-col gap-5 bg-gold-rose p-5 text-black">
    <h2 class="tiktak-h1 text-center font-bold italic">
      AGRANDISSEZ LA COLLECTION TIK·TAK
    </h2>
    <p class="">
      Découvrez nos produits exclusifs, ainsi que les innovations proposées par
      la communauté. Grâce à notre
      <strong> système de personnalisation simple d’utilisation </strong>,
      répondez à vos besoins rapidement et optez pour une montre TiK·TaK d’une
      qualité sublime.
    </p>
    <div class="flex flex-row flex-wrap gap-2"></div>
  </section>
</template>
