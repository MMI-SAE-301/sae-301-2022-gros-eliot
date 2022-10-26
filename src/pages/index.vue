<script setup lang="ts">
import { ref } from "vue";
import { supabase, user } from "@/supabase";

// @ts-ignore
import HeroView from "@/components/general/HeroView.vue";
// @ts-ignore
import MontreFace from "@/components/general/MontreFace.vue";
// @ts-ignore
import MontreProfil from "@/components/general/MontreProfil.vue";

import type { Montre } from "@/types";

const exemples: Montre = [
  {
    libelle_montre: "Red",
    boitier: "#FF0000",
    ecran: "#000000",
    bracelet: "#FF0000",
  },
  {
    libelle_montre: "White",
    boitier: "#FFFFFF",
    ecran: "#000000",
    bracelet: "#FFFFFF",
  },
  {
    libelle_montre: "Black",
    boitier: "#000000",
    ecran: "#000000",
    bracelet: "#000000",
  },
];
</script>

<template>
  <!--Contenu de la page accueil-->
  <section class="flex flex-col gap-20">
    <!--Hero page accueil-->
    <HeroView class="p-2 md:p-6" />

    <!--GOLDEN WATCH ONE-->
    <section
      class="m-auto grid max-w-4xl grid-cols-2 justify-items-center gap-0 md:p-2"
    >
      <img
        src="/images/ellipse-rose.svg"
        alt="Ellipse de décoration"
        class="z- absolute inset-x-0 h-1/2 w-full"
      />
      <img
        src="/images/golden-watch-one-tiktak.png"
        alt=""
        class="z-10 w-32 md:w-52"
      />
      <div class="z-10 flex flex-col gap-2">
        <h2 class="text-4xl font-black uppercase md:text-7xl">
          Golden Watch One TiK·TaK
        </h2>
        <p class="font-bold uppercase">// Édition limitée</p>
        <p class="mx-auto my-2 p-4 md:p-0">
          Or rose, cuir noir / Boîtier de 45 mm (199,99€)
        </p>
        <p
          class="tiktak-button-fill z-50 mx-auto hidden bg-gold-normal text-black md:block"
        >
          Commander
        </p>
      </div>
      <p
        class="tiktak-button-fill z-50 col-span-2 m-auto my-4 bg-gold-normal text-black md:hidden"
      >
        Commander
      </p>
    </section>
  </section>

  <!--COLLECTION TIKTAK-->
  <section
    class="z-10 mx-0 my-20 flex w-full flex-col gap-5 bg-gold-rose p-5 text-black"
  >
    <h2 class="tiktak-h1 text-center font-bold italic">
      AGRANDISSEZ LA COLLECTION TIK·TAK
    </h2>
    <p class="m-auto max-w-4xl">
      Découvrez nos produits exclusifs, ainsi que les innovations proposées par
      la communauté. Grâce à notre
      <strong> système de personnalisation simple d’utilisation </strong>,
      répondez à vos besoins rapidement et optez pour une montre TiK·TaK d’une
      qualité sublime.
    </p>

    <div
      class="flex w-full flex-row flex-wrap items-center justify-center gap-2"
    >
      <MontreFace
        class="w-20 md:w-40"
        :boitier="'#FFD875'"
        :ecran="'black'"
        :bracelet="'black'"
      />
      <MontreFace
        class="w-20 md:w-40"
        :boitier="'black'"
        :ecran="'black'"
        :bracelet="'black'"
      />

      <MontreFace
        class="w-20 md:w-40"
        :boitier="'white'"
        :ecran="'white'"
        :bracelet="'white'"
      />
      <MontreFace
        class="w-20 md:w-40"
        :boitier="'black'"
        :ecran="'white'"
        :bracelet="'black'"
      />
    </div>

    <RouterLink
      to="/montre/new"
      class="tiktak-button-border m-auto border-black"
    >
      Personnaliser
    </RouterLink>
  </section>

  <!--Exemples de montres : données fictives-->
  <section class="z-10 m-auto w-fit">
    <h2 class="tiktak-h2 m-auto w-fit text-gold-rose light:text-black">
      Exemples de modèles
    </h2>
    <div
      class="my-5 flex w-full flex-row flex-wrap items-center justify-center gap-5"
    >
      <div class="w-fit p-4" v-for="montre in exemples" :key="montre">
        <RouterLink
          class="flex flex-col gap-5"
          :to="{
            name: 'montre-exemple-data',
            params: { data: JSON.stringify(montre) },
          }"
        >
          <MontreFace class="w-48" v-bind="montre" />
          <div class="flex flex-col gap-0">
            <p class="m-auto w-fit font-bold">{{ montre.libelle_montre }}</p>
            <p class="m-auto w-fit">69,99€</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
