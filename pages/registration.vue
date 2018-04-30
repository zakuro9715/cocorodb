<template>
  <v-form v-model="valid">
    <h1>Registration</h1>
    <v-text-field
      label="Username"
      v-model="username"
      :rules="usernameRules"
      required />
    <v-text-field
      label="Password"
      v-model="password"
      min="8"
      :append-icon="visiblePassword? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (visiblePassword = !visiblePassword)"
      :type="visiblePassword ? 'text' : 'password'"
      :rules="passwordRules"
      counter
      required />
    <v-text-field
      label="Password Confirmation"
      v-model="passwordConfirm"
      :append-icon="visiblePassword? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (visiblePassword = !visiblePassword)"
      :type="visiblePassword ? 'text' : 'password'"
      :rules="passwordConfirmRules"
      counter
      required />
    <v-btn
      :disabled="!valid"
      @click="submit">Submit</v-btn>
  </v-form>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  data() {
    return {
      valid: false,
      username: '',
      usernameRules: [
        (v) => !!v || 'Username is required'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be more than 8 characters',
      ],
      passwordConfirm: '',
      passwordConfirmRules: [(v) => v == this.password || 'Password not match'],
      visiblePassword: false,
    }
  },
  methods: {
    loginAsAnonymous() {
      this.$store.dispatch('auth/loginAsAnonymous').then(() => {
        this.$router.push('/')
      })
    },
    submit() {
    },
  },
}
</script>

<style>
</style>
