<script setup lang="ts">
import { ref } from "vue";
import type { Montre, colorsEcran } from "@/types";
import { TrashIcon } from "@heroicons/vue/24/outline";

import { supabase, user } from "@/supabase";
import { useRouter } from "vue-router";
// @ts-ignore
import FormKitColors from "@/components/general/FormKitColors.vue";
// @ts-ignore
import FormKitTexture from "@/components/general/FormKitTexture.vue";
// @ts-ignore
import FormKitEcrans from "@/components/general/FormKitEcrans.vue";

// @ts-ignore
import MontreFace from "./MontreFace.vue";
// @ts-ignore
import MontreProfil from "./MontreProfil.vue";

const router = useRouter();

const props = defineProps<{
  data?: Montre;
  id?: string;
}>();

const faceView = ref(true);
const profilView = ref(false);

const montre = ref<Montre>(props.data ?? {});

if (props.id) {
  // On charge les données de la montre
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error) console.log("n'a pas pu charger le table montre :", error);
  else montre.value = (data as any[])[0];
}
// @ts-ignore
async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push("/montre");
  }
}
</script>

<template>
  <div
    class="flex flex-col-reverse items-start justify-between gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:justify-items-center"
  >
    <!--SECTION CUSTOMISATION-->
    <section class="h-fit max-w-3xl p-5">
      <h2 class="tiktak-h2 text-gold-rose light:text-black">
        Personnalisez votre montre connectée TiK·TaK
      </h2>

      <!--COULEURS-->
      <FormKit
        type="form"
        v-model="montre"
        @submit="upsertMontre"
        submit-label="Terminer la personnalisation"
        :submit-attrs="{
          classes: {
            input:
              'tiktak-button-fill bg-gold-normal my-8 text-black md:mx-0 m-auto',
          },
        }"
        :config="{
          classes: {
            form: 'm-4',
            input: 'tiktak-input max-w-md',
            label: 'tiktak-label text-gold-rose light:text-black',
          },
        }"
      >
        <FormKit
          name="libelle_montre"
          label="Nom de la montre"
          value=""
          placeholder="My Watch 01"
          type="text"
          required
        />
        <FormKitColors name="boitier" label="Boitier - couleurs" />
        <FormKitColors name="bracelet" label="Bracelet - couleurs" />
        <FormKitEcrans name="ecran" label="Écran - couleurs" />

        <!--TEXTURES-->
        <FormKitTexture name="boitier" label="Boitier - matériaux" />
        <FormKitTexture name="bracelet" label="Bracelet - matériaux" />
      </FormKit>
    </section>

    <!--SECTION PREVISUALISATION-->
    <section class="m-auto h-fit w-fit">
      <!---->
      <!--BOUTONS DE NAV du carroussel-->
      <div class="mx-auto my-4 flex w-fit gap-5">
        <button
          class="rounded-full bg-red-200 p-5 font-bold"
          @click="(faceView = true), (profilView = false)"
        >
          <img
            src="@/assets/montreFaceLogo.svg"
            alt="vue de face"
            class="h-10 w-10"
          />
          <span class="sr-only">Afficher la vue de face de la montre</span>
        </button>

        <button
          class="rounded-full bg-red-200 p-5 font-bold"
          @click="(faceView = false), (profilView = true)"
        >
          <img
            src="@/assets/montreProfilLogo.svg"
            alt="vue de profil"
            class="h-10 w-10"
          />
          <span class="sr-only">Afficher la vue de profil de la montre</span>
        </button>
      </div>
      <div>
        <MontreFace
          class="h-60 w-60 lg:h-96 lg:w-96"
          v-bind="montre"
          :class="{ hidden: profilView }"
        />

        <MontreProfil
          class="h-60 w-60 lg:h-96 lg:w-96"
          v-bind="montre"
          :class="{ hidden: faceView }"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
