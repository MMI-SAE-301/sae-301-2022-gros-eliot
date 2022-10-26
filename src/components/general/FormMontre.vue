<script setup lang="ts">
import { ref } from "vue";
import type { Montre, colorsEcran } from "@/types";
import { TrashIcon } from "@heroicons/vue/24/outline";

import { supabase } from "@/supabase";
import { useRouter } from "vue-router";

import FormKitColors from "@/components/general/FormKitColors.vue";
import FormKitTexture from "@/components/general/FormKitTexture.vue";
import FormKitEcrans from "@/components/general/FormKitEcrans.vue";

import MontreFace from "./MontreFace.vue";
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
    class="m-auto flex max-w-7xl flex-col-reverse items-start justify-between gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:justify-items-center"
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
              'tiktak-button-fill bg-gold-normal my-4 text-black md:mx-0 m-auto',
          },
        }"
        :config="{
          classes: {
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
        <FormKitColors name="boitier" label="Boitier" />
        <FormKitColors name="bracelet" label="Bracelet" />
        <FormKitEcrans name="ecran" label="Écran" />

        <!--TEXTURES-->
        <FormKitTexture name="boitier" label="Boitier" />
        <FormKitTexture name="bracelet" label="Bracelet" />
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
