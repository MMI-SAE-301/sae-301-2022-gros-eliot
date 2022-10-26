<script setup lang="ts">
import CommandeMontre from "@/components/general/CommandeMontre.vue";

defineProps<{
  id: string;
}>();
</script>
<template>
  <CommandeMontre :id="id" />
</template>
