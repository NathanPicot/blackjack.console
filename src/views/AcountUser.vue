<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Détails du compte
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
              v-model="user.username"
              :rules="usernameRules"
              label="Nom d'utilisateur"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.firstName"
              :rules="nameRules"
              label="Prénom"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.lastName"
              :rules="nameRules"
              label="Nom"
              required
          ></v-text-field>

          <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="Email"
              required
          ></v-text-field>

          <v-btn @click="submit" :disabled="!valid">Envoyer</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  meta: {
    requiresAuth: true
  },
  viewName: "Compte Utilisateur",
  data: () => ({
    valid: true,
    user: {
      username: '',
      firstName: '',
      lastName: '',
      email: ''
    },
    usernameRules: [
      v => !!v || 'Le nom d\'utilisateur est requis',
      v => v.length <= 15 || 'Le nom d\'utilisateur doit être inférieur à 15 caractères',
    ],
    nameRules: [
      v => !!v || 'Le nom est requis',
      v => v.length <= 50 || 'Le nom doit être inférieur à 50 caractères',
    ],
    emailRules: [
      v => !!v || 'E-mail est requis',
      v => /.+@.+/.test(v) || 'E-mail doit être valide',
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // soumettez les données de l'utilisateur ici
      }
    },
  },
};
</script>

<style scoped>
</style>