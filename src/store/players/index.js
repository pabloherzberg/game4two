import { defineStore } from "pinia";
import init from "../../helpers/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

init();
const db = getDatabase();

export const usePlayersStore = defineStore("players", {
  state: () => {
    return {
      players: [],
    };
  },
  actions: {
    updatePlayers() {
      const playersRef = ref(db, "players");
      onValue(playersRef, (snapshot) => {
        this.players = Object.values(snapshot.val());
      });
    },
  },
});
