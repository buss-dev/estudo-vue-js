<template>
  <v-app>
    <NavBar />
    <v-main>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'App',
  created() {
    UserService.getUser().then(
      (response) => (this.$store.state.user = response.data)
    )
  },
}
</script>

<style scoped>
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
