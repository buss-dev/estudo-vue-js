<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row class="justify-center my-auto">
        <v-col md="4">
          <h1 class="my-5">Faça parte desse time!</h1>
          <v-text-field v-model="firstName" label="Nome"></v-text-field>
          <v-text-field v-model="lastName" label="Sobrenome"></v-text-field>
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-text-field
            v-model="password"
            label="Senha"
            type="password"
          ></v-text-field>
          <v-row class="justify-center my-2">
            <v-spacer></v-spacer>
            <v-btn exact to="/">Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="submit">Registrar</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import LocalUser from '@/services/LocalUser'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  computed: {
    user() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
    },
  },
  methods: {
    submit() {
      LocalUser.postUser(this.user)
      this.$store.state.user.results[0].name.first = this.firstName
      this.$store.state.user.results[0].name.last = this.lastName
      this.$router.push('/user')
    },
  },
}
</script>

<style scoped></style>
