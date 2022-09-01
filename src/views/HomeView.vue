<template>
  <v-container>
    <v-card max-width="374" class="mx-auto my-4">
      <v-card-title>{{
        user.results[0].name.first + ' ' + user.results[0].name.last
      }}</v-card-title>
      <v-img height="300" :src="user.results[0].picture.large"></v-img>
      <v-card-text> {{ user.results[0].location.country }} </v-card-text>
      <v-card-text>
        {{ date + ', ' + user.results[0].registered.age }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
    user() {
      return this.$store.state.user
    },
    date() {
      if (!!this.user.results) {
        return new Date(this.user.results[0].registered.date).toLocaleString(
          'pt-BR'
        )
      }
    },
  },
}
</script>
