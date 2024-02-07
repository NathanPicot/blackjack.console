// CarteStore.js

import {defineStore} from 'pinia';
import axios from '@/axios';

export const useCarteStore = defineStore('carte', {
  id: 'carte',
  state: () => ({
    cartes: [],
    cartesMain: [],
    cartesDealers: [],
    // Add an errorMessage property to the state
    errorMessage: false,
  }),
  actions: {
    CreatePaquet() {
      this.$state.errorMessage = false;

      axios.get('/Carte/getAll')
        .then(response => {
          if (response.data.success) {
            console.log(response.data.success);
            this.$state.errorMessage = false;
            this.$state.cartes = response.data.cartes
          } else if (response.data.error) {

            // Update the errorMessage property on error
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            // Update the errorMessage property on error
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },

    Hit(cartes) {

      this.$state.errorMessage = false;
      axios.post('/Carte/Hit', cartes, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            console.log("responseCartes =>", response.data)
            console.log(response.data.success);
            this.$state.errorMessage = false;
            this.$state.cartes = response.data.cartes
            this.$state.cartesMain.push(response.data.carte)
          } else if (response.data.error) {

            // Update the errorMessage property on error
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            // Update the errorMessage property on error
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },

    dealerHit(cartes) {

      this.$state.errorMessage = false;
      axios.post('/Carte/Hit', cartes, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            console.log("responseCartes =>", response.data)
            console.log(response.data.success);
            this.$state.errorMessage = false;
            this.$state.cartes = response.data.cartes
            this.$state.cartesDealers.push(response.data.carte)
          } else if (response.data.error) {

            // Update the errorMessage property on error
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            // Update the errorMessage property on error
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },

    clearData() {
      this.$state.cartes = []
      this.$state.cartesMain = []
      this.$state.cartesDealers = []
    }

  },
  getters: {
    getCartes: (state) => {
      return state.cartes
    },

    getMain: (state) => {
      return state.cartesMain
    },

    getDealerMain: (state) => {
      return state.cartesDealers
    }
  }

});