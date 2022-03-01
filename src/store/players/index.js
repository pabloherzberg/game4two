import { defineStore } from "pinia";
import init from "../../helpers/firebaseConfig";

init();

export const usePlayersStore = defineStore("players", {
  state: () => {
    return {
      players: [],
    };
  },
});
