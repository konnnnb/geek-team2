<template>
  <div class="container">
    <h2>新規登録</h2>
    <form class="login-form">
      <div class="input-group">
        <div>
        <label for="email">メールアドレス</label><span class="mandatory">必須</span></div>
        <input type="email" class="mailform" v-model="email" required/>
      </div><br>
      <div class="inputPass">
        <div>
        <label for="password">パスワード</label><span class="mandatory">必須</span></div>
        <input type="password" class="mailform" v-model="password" required/></div><br>
      <div class="signupBtn">
        <button type="button" @click="signUp()">新規登録</button>
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
    signUp() {
      // if(this.password<4 || ( this.email.length > 257 || !this.email.match(/^[A-Za-z0-9]+[\w-]+@[\w.-]+\.\w{2,}$/))){
      //    alert("パスワードの文字数を確認してください")
      // }else{
      
              //axiosでapiを叩くメソッドを定義
      axios
        .post("/accounts:signUp?key="+firebaseConfig.apiKey, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response) //返ってきたレスポンスをログに表示
          this.$store.commit("updateUid", response.data.localId) 
          this.$router.push("/") 
        })
      this.email = ""
      this.password = ""
      //}
    },

  },
}
</script>

<style>
.mandatory {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: rgb(214, 47, 47);
    text-align: center;
 
}

.mailform{
    width: 500px;
    height: auto;
    font-size: 18px;
}

input[type="email"]:focus {
  outline: 0;
}
input[type="password"]:focus {
  outline: 0;
}
</style>
