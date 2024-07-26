<template>
  <v-dialog v-model="showWinDialog" max-width="500" persistent>
    <v-card>
      <v-card-title class="headline">Félicitations, vous avez gagné !</v-card-title>
      <v-card-text>Votre gain est de {{ potentialGain }}.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeWinDialog">Terminer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="showLoseDialog" max-width="500" persistent>
    <v-card>
      <v-card-title class="headline">Dommage, vous avez perdu !</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="closeLoseDialog">Terminer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showDrawDialog" max-width="500" persistent>
    <v-card>
      <v-card-title class="headline">Match nul !</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue" text @click="closeDrawDialog">Terminer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-container>
    <v-row>
      <v-col>

        <h1>Argent disponible : {{ money }}</h1>
        <div>
          <h2>Jeu de Blackjack </h2>
          <v-btn v-if="!isGameStarted" @click="openDialog">Jouer</v-btn>
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-title>
                <span class="headline">Entrez votre mise</span>
              </v-card-title>
              <v-card-text>
                <v-text-field v-model="bet" label="Mise" type="number"
                              :rules="[v => !!v || 'Mise requise']"></v-text-field>
                <p>Gain potentiel : {{ potentialGain }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="startGameWithBet">Commencer le jeu</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Les boutons et informations du jeu de Blackjack -->
          <div v-if="isGameStarted">
            <h2>Votre mise : {{ bet }}</h2>
            <h2>Gain potentiel : {{ potentialGain }}</h2>
            <!-- Afficher la main du joueur -->
            <h2>Votre main :</h2>
            <v-row>
              <v-col v-for="(card, index) in main" :key="index">
                <img :src="card.textCarte" :alt="card.valeur">
              </v-col>
            </v-row>
            <v-btn @click="hit" class="mt-5">Hit</v-btn>
            <v-btn @click="stand" class="mt-5">Stand</v-btn>
            <div>
              <p>Total des points : {{ points }}</p>
            </div>
            <div v-if="isStand">
              <h2>Main du croupier :</h2>
              <v-row>
                <v-col v-for="(card, index) in dealerMains" :key="index">
                  <img :src="card.textCarte" :alt="card.valeur">
                </v-col>
              </v-row>
              <div>
                <p>Total des points du croupier : {{ dealerPoints }}</p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-snackbar
        v-model="showNotification"
        :timeout="3000"
        color="info"
        right
        bottom
    >
      {{ notificationMessage }}
      <v-btn color="pink" text @click="showNotification = false">Fermer</v-btn>
    </v-snackbar>

  </v-container>
</template>

<script>
import {computed, ref, watchEffect} from 'vue';
import {usePartieStore} from "@/store/PartieStore";
import {useUsersStore} from "@/store/UserStore";
import {useCarteStore} from "@/store/CarteStore";

export default {
  meta: {
    requiresAuth: true
  },
  viewName: "Jouer",
  setup() {
    //Récupération des stores
    const userStore = useUsersStore();
    const carteStore = useCarteStore();
    const partieStore = usePartieStore();

    //Initialisation des constante
    const bet = ref(0);
    const dialog = ref(false);
    const isStand = ref(false);
    const showWinDialog = ref(false);
    const showLoseDialog = ref(false);
    const showDrawDialog = ref(false);
    let money = ref(null);
    const paid = ref(false);
    const closeWinDialog = () => {
      showWinDialog.value = false;
      // reset stores after closing win dialog
      carteStore.clearData();
      isStand.value = false;
      // Add code to reset other stores if needed
    };
    const closeLoseDialog = () => {
      showLoseDialog.value = false;
      // reset stores after closing lose dialog
      carteStore.clearData();
      isStand.value = false;
    };
    const closeDrawDialog = () => {
      showDrawDialog.value = false;
      // reset stores after closing draw dialog
      carteStore.clearData();
      isStand.value = false;
    };

    const isGameStarted = computed(() => {
      const cards = carteStore.getCartes;
      return Boolean(cards && Object.keys(cards).length);
    });
    const cartes = computed(() => carteStore.getCartes);
    const main = computed(() => carteStore.getMain);
    const dealerMains = computed(() => carteStore.getDealerMain)
    const points = computed(() => {
      let totalPoints = main.value.reduce((total, card) => total + (card.valeur >= 10 ? 10 : card.valeur), 0);
      const acesCount = main.value.filter(card => card.valeur === 1).length;

      if (totalPoints < 21) totalPoints += 10 * acesCount;
      if (totalPoints > 21) totalPoints -= 10 * acesCount;

      if (totalPoints >= 21) {
        announceResult();
      }
      return totalPoints;
    });

    const dealerPoints = computed(() => {
      let totalPoints = dealerMains.value.reduce((total, card) => total + (card.valeur >= 10 ? 10 : card.valeur), 0);
      const acesCount = dealerMains.value.filter(card => card.valeur === 1).length;
      if (totalPoints < 21) totalPoints += 10 * acesCount;
      if (totalPoints > 21) totalPoints -= 10 * acesCount;
      return totalPoints;
    });
    const isGameOver = computed(() => points.value >= 21);

    const hit = () => {
      useCarteStore().Hit(cartes.value)
    }
    const possibleWinnings = bet => bet * 2.5;
    const potentialGain = computed(() => possibleWinnings(bet.value));

    const showNotification = ref(false);
    const notificationMessage = ref('');

    const startGameWithBet = () => {
      paid.value = false;
      if (bet.value <= 0) {
        alert('Entrez une mise valide');
      } else {
        carteStore.clearData();
        dialog.value = false;
        const iD_Joueur = userStore.IdUser;
        var joueur = userStore.user;
        joueur.argent -= bet.value;

        if (joueur.argent < 0) {
          alert('vous n avez pas assé d argent pour miser cette somme');
        } else {
          var partie = {mise: bet.value, iD_joueur: iD_Joueur, resultat: "waiting"}
          userStore.UpdateMoney(joueur);
          usePartieStore().createPartie(partie);
          carteStore.CreatePaquet();
        }
      }
    };

    const openDialog = () => {
      dialog.value = true;
    };

    const dealerTurn = async () => {
      do {
        await carteStore.dealerHit(cartes.value);
        // Attendez que Vue réagisse aux modifications de l'état :
        await new Promise(resolve => setTimeout(resolve, 1000));


      } while (dealerPoints.value < 17)
      announceResult(dealerPoints.value);
    }

    const stand = () => {
      isStand.value = true;
      dealerTurn();
    }

    const announceResult = (dealerPoints) => {
      let result;
      switch (true) {
        case (points.value === 21):
          result = "win";
          notificationMessage.value = 'Vous avez eu le Blackjack !';
          showWinDialog.value = true;
          break;

        case (dealerPoints > 21):
          result = "win";
          notificationMessage.value = 'le croupier a depassé 21 vous gagner';
          showWinDialog.value = true;
          break;

        case (dealerPoints < points.value):
          result = "win";
          notificationMessage.value = 'le croupier a fait moins de points que vous, vous gagnez';
          showWinDialog.value = true;
          break;

        case (points.value > 21):
          result = "Loose";
          notificationMessage.value = 'Vous avez dépassé 21 et vous avez perdu.';
          showLoseDialog.value = true;
          break;

        case (dealerPoints > points.value && dealerPoints <= 21):
          result = "Loose";
          notificationMessage.value = 'Le croupier a une meilleure main que vous, vous perdez';
          showLoseDialog.value = true;
          break;

        case (points.value === dealerPoints):
          result = "Draw";
          notificationMessage.value = 'Égalité';
          showDrawDialog.value = true;
          break;

        default:
          // Code par défaut si aucune condition n'est remplie
          break;
      }

      const iD_Joueur = userStore.IdUser;
      const partieData = {
        ID_partie: partieStore.partie.iD_partie,
        Resultat: result,
        Mise: bet.value,
        ID_joueur: iD_Joueur,
      };
      var joueur = userStore.user;
      if (result == 'win') {


        joueur.argent += bet.value * 2.5


      } else if (result == 'Draw') {
        joueur.argent += bet.value*1;
      }

      if (partieData.Resultat) {
        if (paid.value) return;
        paid.value = true;
        userStore.UpdateMoney(joueur)
        partieStore.endPartie(partieData)
      }

      showNotification.value = true;
      setTimeout(() => (showNotification.value = false), 3000); // Ferme la notification après 3 secondes
    };

    watchEffect(async () => {
      money.value = await userStore.getUserMoney;
    });
    return {
      bet,
      dialog,
      potentialGain,
      startGameWithBet,
      openDialog,
      isGameStarted,
      hit, cartes, main,
      points, isGameOver,
      announceResult,
      showNotification,
      showLoseDialog,
      showDrawDialog,
      closeLoseDialog,
      closeDrawDialog,
      notificationMessage, stand, isStand, dealerMains, dealerPoints, showWinDialog,
      closeWinDialog,
      money
    };
  },
};
</script>