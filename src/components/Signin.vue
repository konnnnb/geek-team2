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
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn() {
      //axiosでログイン用のインスタンスにアクセスするメソッドを定義
      axios
        .post(
          //エンドポイントのURLがログイン用のものを使う
          "/accounts:signInWithPassword?key=AIzaSyBKEI_3l35ME_NxSizCLZhOWFe9R0slN8k",
          {
            email: this.email, //送る情報は新規登録と同じ
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response) //返ってきたレスポンスをログに表示
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
