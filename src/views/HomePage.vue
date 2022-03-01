<script>
import init from "../helpers/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import { useAuthStore } from "../store/auth";
import { updatePlayer } from "../helpers/database";

init();
const db = getDatabase();

export default {
  setup() {
    const userAuth = useAuthStore();
    return { userAuth };
  },
  data() {
    return {
      players: [],
    };
  },
  methods: {
    getPlayers() {
      const playersRef = ref(db, "players");
      onValue(
        playersRef,
        (snapshot) => (this.players = Object.values(snapshot.val()))
      );
    },
    updatePlayerPosition(player) {
      updatePlayer(player);
    },
    movePlayer(space, position) {
      const world = document.getElementById("main");
      const playersList = Object.values(this.players);
      const currentPlayer = playersList.find(
        (player) => player.uid === this.userAuth.userInfo.uid
      );
      const currentPlayerIndex = playersList.findIndex(
        (player) => player.uid === this.userAuth.userInfo.uid
      );
      if (currentPlayer.posY < 0) {
        currentPlayer.posY = 0;
        return;
      }
      if (currentPlayer.posY > world.innerHeight) {
        currentPlayer.posY = world.innerHeight;
        return;
      }
      if (currentPlayer.posX < 0) {
        currentPlayer.posX = 0;
        return;
      }
      if (currentPlayer.posX > world.innerWidth) {
        currentPlayer.posX = world.innerWidth;
        return;
      }
      currentPlayer[position] = currentPlayer[position] + space;
      this.players.splice(currentPlayerIndex, 1);
      this.players = [...this.players, currentPlayer];
      this.updatePlayerPosition(currentPlayer);
    },
    setKeyboardEvent() {
      window.addEventListener("keyup", (event) => {
        let space;
        let position;
        let vel = 5;

        if (event.key === "ArrowUp") {
          space = -vel;
          position = "posY";
        }
        if (event.key === "ArrowDown") {
          space = vel;
          position = "posY";
        }
        if (event.key === "ArrowLeft") {
          space = -vel;
          position = "posX";
        }
        if (event.key === "ArrowRight") {
          space = vel;
          position = "posX";
        }
        this.movePlayer(space, position);
      });
    },
  },
  mounted() {
    this.getPlayers();
  },
  created() {
    this.setKeyboardEvent();
  },
};
</script>
<template>
  <main id="main">
    <div
      v-for="player in players"
      :key="player.uid"
      :style="{
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: player.color,
        top: player.posY + 'px',
        left: player.posX + 'px',
      }"
    />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  background-color: teal;
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
