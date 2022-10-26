<script setup lang="ts">
import CommandeMontre from "@/components/general/CommandeMontre.vue";

defineProps<{
  data: string;
}>();
</script>
<template>
  <CommandeMontre :data="JSON.parse(data)" />
</template>
