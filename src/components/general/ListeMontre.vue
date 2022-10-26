<script setup lang="ts">
import MontreFace from "@/components/general/MontreFace.vue";
import type { Montre } from "@/types";
import { ref } from "vue";
import { supabase } from "@/supabase";

import { useRouter } from "vue-router";
const router = useRouter();

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

const props = defineProps<{
  max?: number;
}>();

const { data: montres, error } = await supabase
  .from("montre")
  .select("*")
  .limit(props.max ?? 30);
if (error) {
  console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
  <ul class="flex flex-wrap gap-2">
    <li
      v-for="montre in montres"
      :key="montre.id"
      class="flex flex-col items-center justify-center"
    >
      <router-link
        to="{
          name: 'montre-edit-id',
          params: { id: montre.id_montre },
        }"
      >
        <MontreFace class="h-96 w-96" v-bind="montre" />
      </router-link>

      <router-link to="/">
        <!-- :to='"{
          name: 'montre-commande-id',
          params: { id: montre.id_montre },
        }"'-->
        <button
          class="rounded-sm bg-orange-300 py-2 px-5 font-bold text-black hover:bg-orange-500"
        >
          Commander
        </button>
      </router-link>
    </li>
  </ul>
</template>
