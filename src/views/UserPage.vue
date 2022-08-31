<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="title__user"
          ><h1>{{ fullName }}</h1></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-img height="300" :src="user"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserService from '@/services/UserService'

export default {
  computed: {
    ...mapState(['user']),
    userVuex() {
      return this.$store.state.user
    },
    fullName() {
      if (this.userVuex.results) {
        return this.userVuex.results[0].name
      }
    },
  },
  created() {
    UserService.getUser().then(
      (response) => (this.$store.state.user = response.data)
    )
  },
}
</script>

<style scoped>
.title__user {
  text-align: center;
}
</style>
