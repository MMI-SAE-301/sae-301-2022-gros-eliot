<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
import { type Montre, colorsEcran } from "@/types";

import { ref } from "vue";
import FormKitColors from "@/components/general/FormKitColors.vue";
import FormKitTexture from "@/components/general/FormKitTexture.vue";
import MontreFace from "./MontreFace.vue";
import MontreProfil from "./MontreProfil.vue";

import { supabase } from "@/supabase";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  data?: Montre;
  id?: string;
  faceView: Boolean;
  profilView: Boolean;
}>();

const montre = ref<Montre>(props.data ?? {});
</script>

<template>
  <div
    class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-2 lg:grid-rows-1"
  >
    <!--SECTION CUSTOMISATION-->
    <section class="h-fit">
      <h2 class="tiktak-h2 text-gold-rose light:text-black">
        Personnalisez votre montre connectée TiK·TaK
      </h2>
      <FormKit
        type="form"
        v-model="montre"
        submit-label="Personnaliser"
        :submit-attrs="{
          classes: {
            input:
              'bg-red-500 my-4 px-5 py-3 rounded text-white font-bold hover:bg-red-700',
          },
        }"
      >
        <FormKit
          name="libelleMontre
"
          label="Nom chaussure"
          value=""
          type="text"
          required
        />
        <FormKitColors name="boitier" label="Boitier" />
        <FormKitColors name="bracelet" label="Bracelet" />

        <!--ECRAN : deux choix seulement-->
        <FormKit
          name="ecran"
          label="Écran"
          value="#FFFFFF"
          type="radio"
          :options="colorsEcran"
          :sections-schema="{ inner: { $el: null }, decorator: { $el: null } }"
          input-class="peer sr-only"
          options-class="flex gap-2"
        >
          <template #label="context">
            <div
              class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
              :style="{ backgroundColor: context.option.value }"
            >
              <span class="sr-only">{{ context.option.label }}</span>
            </div>
          </template>
        </FormKit>
        <FormKitTexture name="id_materiel_boitier" label="Boitier" />
        <FormKitTexture name="id_materiel_bracelet" label="Bracelet" />
      </FormKit>
    </section>

    <!--SECTION PREVISUALISATION-->
    <section class="m-auto h-fit w-fit">
      <!---->
      <!--BOUTONS DE NAV du carroussel-->
      <div class="mx-auto my-4 flex w-fit gap-1">
        <button
          class="rounded-full bg-red-200 p-5 font-bold"
          @click="(faceView = false), (profilView = false)"
        >
          <img
            src="@/assets/montreFaceLogo.svg"
            alt="vue de face"
            class="h-10 w-10"
          />
        </button>

        <button
          class="rounded-full bg-red-200 p-5 font-bold"
          @click="(faceView = true), (profilView = true)"
        >
          <img
            src="@/assets/montreProfilLogo.svg"
            alt="vue de profil"
            class="h-10 w-10"
          />
        </button>
      </div>
      <div>
        <MontreFace
          class="h-96 w-96"
          v-bind="montre"
          :class="{ hidden: profilView }"
        />

        <MontreProfil
          class="hidden h-96 w-96"
          v-bind="montre"
          :class="{ flex: faceView }"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
