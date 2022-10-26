<script setup lang="ts">
import { colorsEcran } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>

<template>
  <!--ECRAN : deux choix seulement-->
  <FormKit
    name="ecran"
    label="Écran"
    value="#FFFFFF"
    type="radio"
    :options="colorsEcran"
    :sections-schema="{ inner: { $el: null }, decorator: { $el: null } }"
    input-class="peer sr-only"
    options-class="flex flex-wrap gap-2"
    wrapper-class="my-1"
  >
    <template #label="context">
      <div
        class="h-14 w-14 rounded-full border-2 peer-checked:border-4 peer-checked:border-gold-normal md:h-10 md:w-10"
        :style="{ backgroundColor: context.option.value }"
      >
        <span class="sr-only">{{ context.option.label }}</span>
      </div>
    </template>
  </FormKit>
</template>
