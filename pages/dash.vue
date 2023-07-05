<template>
  <h1>Dashboard</h1>
  <p>This is a protected route.</p>
  <p>You can test if Auth works SSR by reloading this page.</p>

  <h3>User:</h3>
  <pre>{{ JSON.stringify(user, null, 2) }}</pre>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["user-only"],
});
const user = useAuthUser();
</script>
