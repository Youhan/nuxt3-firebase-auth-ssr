<template>
  <div>
    <ul v-if="user">
      <li>{{ user.displayName }}</li>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dash">Dashboard</nuxt-link>
      </li>
      <li>
        <button @click="handleLogout">Signout</button>
      </li>
    </ul>
    <ul v-else>
      <li>
        <button @click="loginWithGoogle">signing with google</button>
      </li>
    </ul>
    <hr />
    <slot />
  </div>
</template>

<script setup lang="ts">

const user = useAuthUser();
const { logout, loginWithGoogle } = useAuth();

const handleLogout = async () => {
  try {
      await logout();
      await navigateTo("/");
  } catch (error) {
      console.error(error);
  }
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
}
</style>
