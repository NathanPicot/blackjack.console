<template>
  <v-app>
    <v-main>

      <v-container>
        <v-card>
          <v-card-title>
            <h1>Bienvenue sur notre site de Blackjack</h1>
          </v-card-title>
          <v-card-text>
            Ici, vous pouvez jouer au Blackjack en ligne avec des joueurs du monde entier. Amusez-vous!
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/playgame">Jouer maintenant</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  meta: {
    requiresAuth: true
  },
  // autres options du composant...
}
</script>

<style scoped>
v-card {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>