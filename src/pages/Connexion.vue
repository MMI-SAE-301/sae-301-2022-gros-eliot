<script setup lang="ts">
import { ref } from "vue";
import { supabase, user } from "../supabase";
import { useRouter } from "vue-router";
const router = useRouter();

const nvlUtilisateur = ref(false);

// CONNEXION : commandes
async function signIn(data, node) {
  const { user, error } = await (nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    : supabase.auth.signIn(data));

  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  } else {
    router.push("/");
  }
}
</script>

<template>
  <section class="py-20">
    <h1 class="tiktak-h1 p-4 text-center text-gold-normal md:hidden">
      Authentification
    </h1>
    <div
      class="m-auto flex w-11/12 flex-col items-center justify-center rounded-lg border-4 border-gold-normal md:w-4/6"
    >
      <h1 class="tiktak-h1 hidden p-4 text-gold-normal md:block">
        Authentification
      </h1>
      <!--Formulaire de connexion-->
      <div class="w-full p-4">
        <FormKit
          type="form"
          :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
          @submit="signIn"
          :config="{
            classes: {
              input: 'tiktak-input max-w-full',
              label: 'tiktak-label text-gold-normal',
              form: 'flex flex-col gap-4',
            },
          }"
          :submit-attrs="{
            classes: {
              input:
                'tiktak-bouton-border text-gold-normal border-gold-normal m-auto',
            },
          }"
        >
          <FormKit
            name="email"
            label="Votre mail"
            type="email"
            placeholder="paul.dupont@exemple.com"
          />
          <FormKit name="password" label="Mot de passe" type="password" />
          <formKit
            :config="{
              classes: {
                label: 'tiktak-text text-light',
              },
            }"
            label="Nouvel utilisateur ?"
            name="nvlUtilisateur"
            type="checkbox"
            v-model="nvlUtilisateur"
            wrapper-class="flex items-center gap-2"
          />
        </FormKit>
      </div>
    </div>
  </section>
</template>

<style></style>
