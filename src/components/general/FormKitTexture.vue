<script setup lang="ts">
import { materiaux } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>
<template>
  <FormKit
    :name="name"
    :label="label"
    value=""
    type="radio"
    :options="materiaux"
    :sections-schema="{ inner: { $el: null }, decorator: { $el: null } }"
    input-class="peer sr-only"
    options-class="flex gap-5"
  >
    <template #label="context">
      <div
        class="w-fit border-2 bg-cover py-2 px-4 text-white peer-checked:border-red-600"
        :style="{ backgroundImage: `url('${context.option.value}')` }"
      >
        <p>{{ context.option.label }}</p>
      </div>
    </template>
  </FormKit>
</template>
