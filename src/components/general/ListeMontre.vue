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
  <ul class="my-16 grid grid-cols-produits gap-16 md:my-5 md:gap-5">
    <li
      v-for="montre in montres"
      :key="montre.id"
      class="flex flex-col items-center justify-center gap-3"
    >
      <router-link
        :to="{
          name: 'montre-commande-id',
          params: { id: montre.id_montre },
        }"
      >
        <MontreFace class="h-72 w-72 md:h-96 md:w-96" v-bind="montre" />
      </router-link>

      <div class="flex w-fit flex-col gap-0 text-center">
        <h4 class="font-bold">{{ montre.libelle_montre }}</h4>
        <p>59,99€</p>
      </div>

      <router-link
        :to="{
          name: 'montre-edit-id',
          params: { id: montre.id_montre },
        }"
      >
        <!-- -->
        <button class="tiktak-button-fill bg-gold-rose text-black">
          Modifier
        </button>
      </router-link>
    </li>
  </ul>
</template>
