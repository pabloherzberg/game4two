<template>
  <div>
    <button @click="handleSubmit(1)">PLAYER 1</button>
    <button @click="handleSubmit(2)">PLAYER 2</button>
  </div>
</template>

<style scoped></style>

<script>
import { useAuthStore } from "../store/auth";
import router from "../router";

export default {
  setup() {
    const userAuth = useAuthStore();
    return { userAuth };
  },
  data() {
    return {
      email: "teste@teste.com",
      pass: "Teste123",
    };
  },
  methods: {
    async handleSubmit(player) {
      if (player === 1) {
        this.email = "teste@teste.com";
      }
      if (player === 2) {
        this.email = "teste1@teste.com";
      }
      await this.userAuth.handleSignIn(this.email, this.pass);
      router.push({ name: "HomePage" });
    },
  },
};
</script>
