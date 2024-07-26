<template>
  <v-container>
    <v-card>
      <v-card-title>
        Statistiques des Joueurs
      </v-card-title>

      <v-card-subtitle>
        Total Gagné et Total Misé
      </v-card-subtitle>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card class="mb-4">
              <v-card-title>Total Gagné</v-card-title>
              <v-card-subtitle class="text-h5 font-weight-bold">
                {{ totalGagne }}
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card class="mb-4">
              <v-card-title>Total Misé</v-card-title>
              <v-card-subtitle class="text-h5 font-weight-bold">
                {{ totalMise }}
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card class="mb-4">
              <v-card-title>Bénéfice</v-card-title>
              <v-card-subtitle class="text-h5 font-weight-bold">
                {{ totalMise - totalGagne }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Graphique Sparkline en dehors de la carte -->
    <v-sheet
        class="v-sheet--offset mx-auto my-8"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
        rounded="lg"
    >
      <v-sparkline
          :labels="labels"
          :model-value="value"
          color="white"
          line-width="2"
          padding="16"
          class="sparkline-graph"
          auto-draw
      ></v-sparkline>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePartieStore } from "@/store/PartieStore";

const partieStore = usePartieStore();

// Variables pour les totaux
const totalGagne = ref(0);
const totalMise = ref(0);
const labels = ref([]);
const value = ref([]);

// Fonction pour récupérer les données
const fetchData = async () => {
  try {
    await partieStore.fetchAllGain();
    await partieStore.fetchAllMise();
    await partieStore.fetchAllParties();

    // Mise à jour des totaux
    totalGagne.value = partieStore.allGain;
    totalMise.value = partieStore.allMise;

    // Mise à jour des données pour le graphique
    labels.value = partieStore.parties.map(p => p.date); // Assure-toi que la date est au format souhaité
    value.value = partieStore.parties.map(p => p.gainDuCasino); // Assure-toi que GainDuCasino est correct
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

// Appeler fetchData au montage du composant
onMounted(() => {
  fetchData();
});

// Watchers pour les valeurs du store
watch(
    () => partieStore.allGain,
    (newVal) => {
      totalGagne.value = newVal;
    }
);

watch(
    () => partieStore.allMise,
    (newVal) => {
      totalMise.value = newVal;
    }
);

watch(
    () => partieStore.parties,
    (newVal) => {
      labels.value = newVal.map(p => p.date);
      value.value = newVal.map(p => p.gainDuCasino);
    },
    { immediate: true } // Cela garantit que le watcher s'exécute immédiatement
);
</script>
<script>
  export default {
    meta: {
      requiresAuth: true
    },
    viewName: "Statistique Général"
  }
</script>

<style scoped>
/* Ajoute du style pour le sparkline pour le rendre plus grand */
.sparkline-graph {
  height: 200px; /* Ajuste la hauteur selon tes besoins */
  width: 100%; /* Occupe toute la largeur disponible */
}
</style>
