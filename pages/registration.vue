<i18n>
ja:
  username: ユーザー名
  password: パスワード
  passwordConfirmation: パスワード（確認）
  passwordNotMatch: パスワードが一致しません
  passwordTooShort: パスワードが短すぎます
</i18n>
<template>
  <v-form v-model="valid">
    <h1>{{ $t('register') }}</h1>
    <v-text-field
      :label="$t('username')"
      v-model="username"
      :rules="usernameRules"
      required />
    <v-text-field
      :label="$t('password')"
      v-model="password"
      min="8"
      :append-icon="visiblePassword? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (visiblePassword = !visiblePassword)"
      :type="visiblePassword ? 'text' : 'password'"
      :rules="passwordRules"
      counter
      required />
    <v-text-field
      :label="$t('passwordConfirmation')"
      v-model="passwordConfirm"
      :append-icon="visiblePassword? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (visiblePassword = !visiblePassword)"
      :type="visiblePassword ? 'text' : 'password'"
      :rules="passwordConfirmRules"
      counter
      required />
    <v-btn
      :disabled="!valid"
      @click="submit">{{ $t('submit') }}</v-btn>
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
        (v) => !!v || this.$t('required'),
      ],
      password: '',
      passwordRules: [
        (v) => !!v || this.$t('required'),
        (v) => v.length >= 8 || this.$t('passwordTooShort'),
      ],
      passwordConfirm: '',
      passwordConfirmRules: [(v) => v == this.password || this.$t('passwordNotMatch')],
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
