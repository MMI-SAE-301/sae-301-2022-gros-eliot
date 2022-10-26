<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
import type { Montre } from "@/types";
import { ref } from "vue";

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

if (props.id) {
  // On charge les données de la montre
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error) console.log("n'a pas pu charger le table montre :", error);
  else {
    montre.value = (data as any[])[0];
  }
}

async function upsertCommande(dataForm, node) {
  const { data: datacommande, error } = await supabase
    .from("montre")
    .upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    router.push("/basket/");
    node.setErrors([]);
    console.log("Réussi!");
  }
}

async function supprimerMontre() {
  const { data, error } = await supabase
    .from("montre")
    .delete()
    .match({ id_montre: montre.value.id_montre });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      montre.value,
      "erreur :",
      error
    );
  } else {
    router.push("/montre/");
  }
}
</script>

<template>
  <div class="p-4 underline">
    <RouterLink to="/montre"> &lt; Retour à la collection </RouterLink>
  </div>

  <!--Vue générale-->
  <div class="my-5">
    <h1 class="tiktak-h1 p-2 text-center">
      Votre produit :
      <span class="text-gold-normal light:text-black">{{
        montre.libelle_montre
      }}</span>
    </h1>
  </div>

  <!--Images montres-->
  <section
    class="my-8 mx-4 flex max-w-3xl justify-center gap-5 md:mx-auto md:gap-20"
  >
    <MontreFace class="w-full" v-bind="montre" />

    <MontreProfil class="w-full" v-bind="montre" />
  </section>

  <!--COMMANDE ET SUPPRESSION-->
  <!--COMMANDE ET SUPPRESSION-->
  <!--COMMANDE ET SUPPRESSION-->
  <div class="grid grid-cols-1 justify-items-center md:grid-cols-2">
    <!--COMMANDER-->
    <section
      class="flex w-full flex-col gap-3 p-4 font-thin text-gold-normal light:text-black"
    >
      <h3 class="tiktak-h2">Commander le produit</h3>
      <div>
        <p class="font-bold">Nom</p>
        <p>{{ montre.libelle_montre }}</p>
      </div>
      <div>
        <p class="font-bold">Composants</p>
        <p>Couleurs du bracelet : {{ montre.bracelet }}</p>
        <p>Couleurs du boîtier : {{ montre.boitier }}</p>
      </div>
      <div>
        <p class="font-bold">Prix</p>
        <p>59,99€</p>
      </div>
      <FormKit
        type="form"
        v-model="montre"
        @submit="upsertCommande"
        submit-label="Commander"
        :submit-attrs="{
          classes: {
            input: 'tiktak-button-fill bg-gold-normal text-black',
          },
        }"
        :config="{
          classes: {
            label: 'tiktak-label text-gold-normal light:text-black',
            input:
              'my-1 tiktak-text text-gold-normal light:text-black md:max-w-3xl rounded-md border-2 border-gold-normal light:border-black bg-black p-2 focus-visible:ring-2 focus-visible:ring-gold-normal light:bg-opacity-5',
            form: 'flex flex-col gap-2',
          },
        }"
      >
        <FormKit name="date_livraison" label="Date de livraison" type="date" />
        <FormKit
          name="commande"
          label="J'accepte les conditions générales de vente"
          required
          type="checkbox"
          label-class="font-thin"
          wrapper-class="flex gap-2 justify-start items-center"
        />
      </FormKit>
    </section>
    <!--SUPPRIMER LE PRODUIT-->
    <section
      class="flex w-full flex-col gap-3 p-4 text-gold-rose light:text-black"
    >
      <h3 class="tiktak-h2 w-full text-start">Supprimer le produit</h3>

      <button
        type="button"
        @click="($refs.dialogSupprimer as any).showModal()"
        class="tiktak-button-border border-gold-rose text-gold-rose light:border-black light:text-black"
      >
        Supprimer
        <TrashIcon class="h-5 w-5 stroke-gold-rose light:stroke-black" />
      </button>
      <dialog
        ref="dialogSupprimer"
        class="max-w-2xl border-2 border-white bg-black text-center"
        @click="($event.currentTarget as any).close()"
      >
        <h3 class="tiktak-h2 p-4 text-white">
          Êtes-vous sûr de vouloir supprimer cette montre ({{
            montre.libelle_montre
          }}) ?
        </h3>
        <div class="flex w-full justify-center gap-3">
          <button type="button" class="p-2 text-gold-normal">Annuler</button
          ><button
            type="button"
            @click="supprimerMontre()"
            class="tiktak-button-fill bg-gold-normal"
          >
            Confirmer la suppression
          </button>
        </div>
      </dialog>
    </section>
  </div>
</template>

<style scoped></style>
