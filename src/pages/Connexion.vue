<script setup lang="ts">
import { ref } from "vue";
import { supabase, user } from "../supabase";

import Facebook from "@/components/icons/Facebook.vue";
import Google from "@/components/icons/Google.vue";

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

async function loginFacebook() {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "facebook",
    });
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  }
}

async function loginGoogle() {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  }
}
</script>

<template>
  <section class="py-20 text-gold-normal dark:text-black">
    <!--titre alternatif pour petits écrans-->

    <h1 class="tiktak-h1 p-4 text-center md:hidden">Authentification</h1>
    <!--BOX : formulaire de connexion-->
    <div
      class="m-auto flex w-11/12 flex-col items-center justify-center rounded-lg border-4 border-gold-normal dark:border-black md:w-4/6"
    >
      <h1 class="tiktak-h1 hidden p-4 md:block">Authentification</h1>
      <!--Formulaire de connexion-->
      <div class="w-full p-4">
        <FormKit
          type="form"
          :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
          @submit="signIn"
          :config="{
            classes: {
              input: 'tiktak-input max-w-full text-white',
              label: 'tiktak-label dark:text-black',
              form: 'flex flex-col gap-4',
            },
          }"
          :submit-attrs="{
            classes: {
              input:
                'tiktak-bouton-border  dark:border-black border-gold-normal m-auto',
            },
          }"
        >
          <FormKit
            name="email"
            label="Votre mail"
            type="email"
            placeholder="paul.dupont@exemple.com"
          />
          <FormKit
            name="password"
            label="Mot de passe"
            type="password"
            placeholder="Insérez votre mot de passe"
          />
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
      <!--Boutons connexion Google / Facebook-->
      <div class="mb-10 flex items-center justify-center gap-5">
        <button
          @click="loginFacebook"
          id="button-facebook"
          class="rounded-lg bg-blue-500 px-6 py-2"
          sr-only="Connexion via Facebook"
        >
          <Facebook class="h-8 w-8 fill-white" />
        </button>
        <button
          @click="loginGoogle"
          id="button-google"
          class="rounded-lg bg-white px-6 py-2 shadow-xl"
          sr-only="Connexion via Google"
        >
          <Google class="h-8 w-8 fill-white" />
        </button>
      </div>
    </div>
  </section>
</template>

<style></style>
