<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
import type { Montre } from "@/types";
import { ref } from "vue";
import FormKitColors from "@/components/FormKitColors.vue";
import FormKitTexture from "@/components/FormKitTexture.vue";
import MontreFace from "./MontreFace.vue";
import MontreProfil from "./MontreProfil.vue";

import { supabase } from "@/supabase";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  data?: Montre;
  id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});
</script>

<template>
  <div class="flex gap-1">
    <a href="#profil">
      <button class="bg-red-200 p-5 font-bold">Profil</button>
    </a>

    <a href="#face">
      <button class="bg-red-200 p-5 font-bold">Face</button>
    </a>
  </div>
  <div class="carousel">
    <div class="carousel-item w-full" id="profil">
      <MontreProfil class="h-72 w-72" v-bind="montre" />
    </div>

    <div class="carousel-item w-full" id="face">
      <MontreFace class="h-72 w-72" v-bind="montre" />
    </div>
  </div>

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
      name="libelle"
      label="Nom chaussure"
      value=""
      type="text"
      required
    />
    <FormKitColors name="boitier" label="Boitier" />
    <FormKitColors name="bracelet" label="Bracelet" />
    <FormKit name="ecran" label="Écran"></FormKit>

    <FormKitTexture name="boitier" label="Boitier" />
    <FormKitTexture name="bracelet" label="Bracelet" />
  </FormKit>
</template>

<style scoped></style>
