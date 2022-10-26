<script setup lang="ts">
// @ts-ignore
import CommandeMontre from "@/components/general/CommandeMontre.vue";

defineProps<{
  id: string;
}>();
</script>
<template>
  <CommandeMontre :id="id" />
</template>
