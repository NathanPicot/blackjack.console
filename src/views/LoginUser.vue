<template>
  <v-app>
    <v-main>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate()">
            Login
          </v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const valid = ref(true);
    const username = ref("");
    const password = ref("");
    const nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ];
    const passwordRules = [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be at least 8 characters',
    ];

    const validate = () => {
      if (this.$refs.form.validate()) {
        // do something
      }
    };

    return { valid, username, password, nameRules, passwordRules, validate };
  },
};
</script>