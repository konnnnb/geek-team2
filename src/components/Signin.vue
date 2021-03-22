<template>
  <div class="container">
    <h2>ログイン</h2>
    <form class="login-form">
      <div class="input-group">
        <div>
        <label for="email">メールアドレス</label><span class="mandatory">必須</span></div>
        <input type="email" id="email" class="mail" v-model="email" required/>
      </div><br>
      <div class="input-group">
        <div>
        <label for="password">パスワード</label><span class="mandatory">必須</span></div>
        <input type="password" id="password" class="mail" v-model="password" required/>
      </div><br>
      <div class="input-group">
        <button type="button" @click="signIn()">サインイン</button>
      </div><br><br>
    </form>
  </div>
</template>

<script>
import axios from "../axios.js" //axiosのインスタンスをインポート
import {firebaseConfig} from "../firebase"
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn() {
  
      axios
        .post(
 
          "/accounts:signInWithPassword?key="+firebaseConfig.apiKey,
          {
            email: this.email, 
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response) 
          this.$store.commit("updateUid", response.data.localId)
          this.$router.push("/")
        })
      this.email = ""
      this.password = ""
    },
  },
}
</script>

<style>
.input-group {
  margin: 5px;
}

.mail{
    width: 500px;
    height: auto;
    font-size: 18px;
    border-color: dimgray;
}
</style>
