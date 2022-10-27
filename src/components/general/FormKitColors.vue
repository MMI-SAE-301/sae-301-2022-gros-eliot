<script setup lang="ts">
import { colors } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>
<template>
  <FormKit
    :name="name"
    :label="label"
    value="#FFFFFF"
    type="radio"
    :options="colors"
    :sections-schema="{ inner: { $el: null }, decorator: { $el: null } }"
    input-class="peer sr-only"
    options-class="flex flex-wrap gap-2"
    wrapper-class="my-1"
  >
    <template #label="context">
      <div
        class="h-10 w-10 rounded-full border-2 peer-checked:border-4 peer-checked:border-gold-normal md:h-8 md:w-8"
        :style="{ backgroundColor: context.option.value }"
      >
        <span class="sr-only">{{ context.option.label }}</span>
      </div>
    </template>
  </FormKit>
</template>
