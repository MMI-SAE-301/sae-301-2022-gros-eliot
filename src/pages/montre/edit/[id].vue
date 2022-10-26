<script setup lang="ts">
// @ts-ignore
import FormMontre from "@/components/general/FormMontre.vue";

defineProps<{
  id: string;
}>();
</script>
<template>
  <FormMontre :id="id" />
</template>
