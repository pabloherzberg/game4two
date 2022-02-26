import { defineStore } from "pinia";
import { signIn } from "../../helpers/auth";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      userInfo: false,
      online: false,
    };
  },
  actions: {
    async handleSignIn(email, pass) {
      const response = await signIn(email, pass);
      this.userInfo = response.user;
      this.online = true;
    },
  },
});
