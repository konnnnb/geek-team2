<template>
  <div class="container">
    <h2 class="login">ログイン</h2>
    <form class="login-form">
      <div class="input-group">
        <div>
        <label for="email">メールアドレス</label><span class="mandatory">必須</span></div>
        <input type="email" id="email" class="mail" v-model="email" required><span class="focus"></span>
      </div><br>
      <div class="input-group">
        <div>
        <label for="password">パスワード</label><span class="mandatory">必須</span></div>
        <input type="password" id="password" class="mail" v-model="password" required/>
      </div><br><br>
      <div class="input-groups">
        <button type="button" @click="signIn()" class="signbtn">ログイン</button>
      </div>
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
      if(this.password.length>3){
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
      
    }else{
      alert("入力された情報が正しくありません")
    }
  },
}
}
</script>

<style>
.input-group {
  margin: 5px;
}
.input-groups{
  text-align: center;
}
.login{
  text-align: center;
}
.signbtn{
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
.signbtn:hover {
  box-shadow    : none;
  color         : #030114; 
  background    : #faf5f5;
}
.mail{
    width: 500px;
    height: auto;
    font-size: 18px;
	border: 0;
	border-bottom: 1px solid #1b2538;
	background-color: transparent;
}

.mail:focus
{
	border-bottom: 1.5px solid #96daa1;
  outline: 0;
}


.login-form{
  margin: 50px;
}

</style>
