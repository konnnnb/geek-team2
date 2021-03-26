<template>
  <div class="container">
    <h2 class="signupBtn">新規登録</h2>
    <form class="login-form">
      <div class="input-group">
        <div>
        <label for="email">メールアドレス</label><span class="mandatory">必須</span></div>
        <input type="email" class="mailform" v-model="email" required/>
      </div><br>
      <div class="inputPass">
        <div>
        <label for="password">パスワード</label><span class="mandatory">必須</span></div>
        <input type="password" class="mailform" v-model="password" required/></div><br><br>
      <div class="signupBtn">
        <button type="button" @click="signUp()" class="signup">新規登録</button>
      </div><br>
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
.signup{
      border-radius : 5%;
  font-size     : 12pt;
  text-align    : center; 
  cursor        : pointer;
  padding       : 9px 14px;
  background    : #030114;
  color         : #faf5f5;
  line-height   : 1em;
  transition    : .3s; 
  box-shadow    : 3px 3px 9px #666666;  
  border        : 2px solid #030114;  
  width: 130px; 
}
.signup:hover {
  box-shadow    : none;
  color         : #030114; 
  background    : #faf5f5;
}
.signupBtn{
  text-align: center;
}

.mailform{
    width: 500px;
    height: auto;
    font-size: 18px;
	border: 0;
	border-bottom: 1px solid #1b2538;
	background-color: transparent;
}
.mailform:focus
{
	border-bottom: 1.5px solid #96daa1;
   outline: 0;
}

</style>
