<script setup lang="ts">
import FormMontre from "@/components/general/FormMontre.vue";

defineProps<{
  data: string;
}>();
</script>
<template>
  <FormMontre :data="JSON.parse(data)" />
</template>
