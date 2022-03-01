import init from "../firebaseConfig";
import { getDatabase, ref, onValue, set } from "firebase/database";

init();
const db = getDatabase();

export function updatePlayers() {
  const playersRef = ref(db, "players");
  onValue(playersRef, (snapshot) => Object.values(snapshot.val()));
}

export function updatePlayer(player) {
  const playersRef = ref(db, `players/${player.uid}`);
  set(playersRef, player);
}
