import init from "../firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

init();
const db = getDatabase();

export function updatePlayer(player) {
  const playersRef = ref(db, `players/${player.uid}`);
  set(playersRef, player);
}
