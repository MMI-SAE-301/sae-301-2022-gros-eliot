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
        class="h-10 w-10 rounded-full border-2 bg-cover peer-checked:border-red-600"
        :style="{ backgroundImage: `url('${context.option.value}')` }"
      >
        <span class="sr-only">{{ context.option.label }}</span>
      </div>
    </template>
  </FormKit>
</template>
