<script setup lang="ts">
// @ts-ignore
import CommandeMontre from "@/components/general/CommandeMontre.vue";

defineProps<{
  data: string;
}>();
</script>
<template>
  <CommandeMontre :data="JSON.parse(data)" />
</template>
