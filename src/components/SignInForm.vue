<template>
  <div>
    <input
      type="text"
      name="email"
      placeholder="e-mail"
      :value="email"
      @input="(e) => (this.email = e.target.value)"
    />
    <input
      type="text"
      name="password"
      placeholder="senha"
      :value="pass"
      @input="(e) => (this.pass = e.target.value)"
    />
    <button @click="handleSubmit">Entrar</button>
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
    async handleSubmit() {
      await this.userAuth.handleSignIn(this.email, this.pass);
      router.push({ name: "HomePage" });
    },
  },
};
</script>
