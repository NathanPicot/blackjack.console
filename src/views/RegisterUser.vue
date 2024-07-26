/* eslint-disable */
<!-- RegisterUser.vue -->
<template>
  <v-snackbar v-model="showSnackbar" color="error" :timeout="3000" auto-height multi-line>
    {{ $state.errorMessage }}
  </v-snackbar>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">Inscription</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">

              <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nom d'utilisateur"
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Mot de passe"
                  type="password"
              ></v-text-field>

              <v-text-field
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  label="Confirmez le mot de passe"
                  type="password"
              ></v-text-field>

              <v-btn type="submit" color="primary" :disabled="!valid"
                     @click.prevent="addUser({nom:this.name, password:this.password})">S'inscrire
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import {useUsersStore} from '@/store/UserStore';
import {ref, watch} from 'vue';

export default {
  viewName: "S'inscrire",

  setup() {
    const {addUser, $state} = useUsersStore();

    const showSnackbar = ref(false);

    // Regardez la valeur errorMessage et modifiez la valeur de showSnackbar en conséquence
    watch(() => $state.errorMessage, (value) => {
      showSnackbar.value = value !== false;
      if (showSnackbar.value == false) {
        $state.errorMessage = showSnackbar.value;
      }
    });

    const closeSnackbar = () => {
      showSnackbar.value = false;
      $state.errorMessage = false;
    }


    return {addUser, showSnackbar, $state, closeSnackbar};
  },
  data() {
    return {
      valid: false,
      user: {},
      name: '',
      password: '',
      confirmPassword: '',
      nameRules: [
        v => !!v || 'Nom d\'utilisateur est nécessaire',
      ],
      passwordRules: [
        v => !!v || 'Mot de passe est nécessaire',
      ],
      confirmPasswordRules: []
    }
  },
  created() {
    this.confirmPasswordRules = [
      v => !!v || 'Confirmation du mot de passe est nécessaire',
      value => value === this.password || 'Les mots de passe ne correspondent pas'
    ]
  },

  methods: {}
}
</script>

<style scoped>
/* Ajoutez des styles spécifiques au composant ici si nécessaire */
</style>
