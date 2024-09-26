<script setup lang="ts">
import {useSupabaseClient} from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient";

const supabase = useSupabaseClient()

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error) console.log(error)
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}
</script>

<template>
<h1>Supabase is working! Is it?</h1>
</template>

<style scoped>

</style>