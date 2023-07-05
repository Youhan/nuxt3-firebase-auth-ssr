<template>
  <div>
    <h1>Home</h1>
    <p>This route is not protected and is public, but if user is present we can use it.</p>
    <h3>User:</h3>
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
const user = useAuthUser();
</script>
