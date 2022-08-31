<template>
  <v-form>
    <v-container>
      <v-row class="justify-center my-auto">
        <v-col md="4">
          <h1 class="my-5">Faça parte desse time!</h1>
          <v-text-field label="Nome"></v-text-field>
          <v-text-field label="Sobrenome"></v-text-field>
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha" type="password"></v-text-field>
          <v-row class="justify-center my-2">
            <v-spacer></v-spacer>
            <v-btn>Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Registrar</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {}
</script>

<style scoped></style>
