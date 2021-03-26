<template>
  <div class="container">
    <div class="signin">
    <!-- <div class="logform">マイページ
    <div class="sign" @click="logout()" v-if="isLoggedIn">ログアウトする</div></div> -->
    <!-- <button @click="deleted()" class="sign" v-if="isLoggedIn">アカウント削除</button> -->
    </div>
        <div class="logform"><div class="log" v-if="isLoggedIn">マイページ
    <div class="sign" @click="logout()" v-if="isLoggedIn">ログアウト</div></div></div>
    <div class ="boxes" v-if="!isLoggedIn">
    <div class="box"><Signin v-if="!isLoggedIn"></Signin></div>
    <div class="box"><Signup v-if="!isLoggedIn"></Signup></div>
    </div>
    <div class="collect"><Collect v-if="isLoggedIn"></Collect></div>
  </div>
</template>

<script>
// import firebase from "firebase"
import Signin from "../components/Signin"
import Signup from "../components/Signup"
import Collect from "../components/Collect"
//  import store from "../store"
export default {
  data() {
    return {
      tools: false,
    }
  },
  components: {
    Signin,
    Signup,
    Collect,
  },
  methods: {
    logout() {
      this.$store.commit("updateUid", null)
      // this.$router.push("/signin")
      
    },

  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.uid !== null
    },
  },
}
</script>
<style>
.boxes{
  display: flex;
	justify-content: space-around;
}
.box{
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  margin-top: 50px;
}

.signin{
  display: flex;
  justify-content:flex-end;
}

.sign{
  display       : inline-block;
  border-radius : 5%;
  font-size     : 10pt;
  text-align    : center;
  cursor        : pointer;
  padding       : 8px 15px; 
  background    : #faf5f5;
  color         : #030114;
  line-height   : 1em; 
  opacity       : 1; 
  transition    : .3s;
  box-shadow    : 1px 1px 1px #666666; 
  text-shadow: 0ex;
}

.log{
  margin-left: 30px;
  margin-top: 30px;
  font-size: 40px;
  font-weight:bolder;
  text-shadow: 3px 3px 0 #adabab;
  text-align: center;
  
}

.log::before{
  content: '';
	position: absolute;
	left: 50%;
	top: 150px;
	border-bottom: solid 2px #000;
	transform: translateX(-50%);
	animation: dec 2s linear forwards;
}
@keyframes dec {
  0%{
		width: 0%;
	}
	100%{
		width: 40%;
	}
}
.sign:hover {
  box-shadow    : none;
  opacity       : 0.8;
}

</style>
