<template>
  <div class="login-singup">
    <img src="../assets/images/monday_logo_icon.png" alt="">
    {{msg}}
    <div v-if="loggedinUser">
      <h3>
        Loggedin User:
        {{ loggedinUser.username }}
        <button @click="doLogout">Logout</button>
      </h3>
    </div>
    <div v-else>
      <form
        v-if="showLogin"
        class="login-singup-form"
        @submit.prevent="doLogin"
      >
        <h2>Login</h2>
        <input
          type="text"
          v-model="loginCred.username"
          placeholder="User name"
        />
        <input
          type="text"
          v-model="loginCred.password"
          placeholder="Password"
        />
        <button>Login</button>
        <p>
          If you do not have an account.
          <b @click="showLogin = !showLogin">Sign up</b>
        </p>
      </form>
      <form v-else class="login-singup-form" @submit.prevent="doSignup">
        <h2>Signup</h2>
        <input
          type="text"
          v-model="signupCred.email"
          placeholder="Your email"
        />
        <input
          type="text"
          v-model="signupCred.password"
          placeholder="Password"
        />
        <input
          type="text"
          v-model="signupCred.username"
          placeholder="Username"
        />
        <button>Signup</button>
        <p>
          If you already have an account.
          <b @click="showLogin = !showLogin">Login</b>
        </p>
      </form>
    </div>
    <router-link :to="'/'">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      msg: "",
      loginCred: { username: "", password: "" },
      signupCred: { username: "", password: "", email: "" },
      showLogin: true,
    };
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
          this.$store.dispatch({ type: "loadUser" });
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = "Please enter username/password";
        return;
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    },
    async doSignup() {
      if (
        !this.signupCred.email ||
        !this.signupCred.password ||
        !this.signupCred.username
      ) {
        this.msg = "Please fill up the form";
        return;
      }
      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
      this.$router.push("/");
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" });
    },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: "removeUser", userId });
        this.msg = "User removed";
      } catch (err) {
        this.msg = "Failed to remove user";
      }
    },
  },
};
</script>
