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
    options-class="flex flex-wrap gap-5"
  >
    <template #label="context">
      <div
        class="w-fit border-2 bg-cover py-2 px-4 text-white peer-checked:border-gold-normal"
        :style="{
          background: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%),url('${context.option.value}')`,
        }"
      >
        <p>{{ context.option.label }}</p>
      </div>
    </template>
  </FormKit>
</template>
