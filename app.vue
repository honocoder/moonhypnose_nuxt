<template>
  <div>
    <NuxtRouteAnnouncer />
    <Supabase />
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import Supabase from "~/components/Supabase.vue";
</script>