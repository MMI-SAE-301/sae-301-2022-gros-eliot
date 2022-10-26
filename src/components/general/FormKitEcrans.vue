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
</template>
