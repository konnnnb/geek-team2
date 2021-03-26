<template>
<div  class="showposts">
  <div v-for="(post, index) in myposts" v-bind:key="index" class="detail">
    <div v-if="currentUser===post.uid" class="margin">
      <div class="showPost">
        <div  v-on:click="ToshowPost(post.id)">
         <div><h2 class="fonts">{{ post.mainTitle }}</h2></div>
           <div v-for="(value, index) in post.category" v-bind:key="index">
              <h4 class="fonts">#{{ value }} </h4>
            </div>
               <h5 class="fonts">{{ post.mainDescription }}</h5>
               <img v-bind:src="post.mainImage">
         </div>
          <div class="delete-btn" v-on:click="ToshowDelete(post.id)">削除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import {db} from "@/firebase";
import store from "../store"

export default {
  data(){
    return{
      myposts:[],
      postid:"",
    }
  },
    
  methods :{
  ToshowPost: function(id){
    this.postid=id
  this.$router.push("/mypage-edit/"+id);
    },
    reload(){
    this.$router.push("/")
    console.log("err")
    },

  ToshowDelete: function(id){
        console.log(id+"確認")
        db.collection("posts").doc(id).delete()
    console.log("deleted!");
    this.reload()
    },
    
    },
    computed:{
      currentUser(){
        return store.getters.uid
      }
    },

    created() {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.myposts.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
}
</script>
<style scoped>
.showposts {
display: flex;
flex-wrap: wrap;
margin: 50px;
}

.showPost {
  background-color: #faf5f5;
  box-shadow: 2px 2px 12px #e2e0e0;
    padding: 10px;
  border-radius: 8px;
  break-inside: avoid;
}
h2 {
  text-align: center;
}
.showPost img {
  width: 400px;
  display: block;
  margin: auto;
}
.fonts{
  color:rgb(19, 18, 18) ;
}
.margin{
  margin: 25px;
}
.detail{
  width: 500px;
}
.detail:empty{
width: 0px;
height: 0px;
}
.delete-btn{
  font-size: 14PX;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  text-align    : center; 
  cursor        : pointer;
  background    : #030114;
  color         : #faf5f5; 
  line-height   : 1em;
  transition    : .3s; 
  box-shadow    : 3px 3px 9px #666666;  
  border        : 2px solid #030114;  
  width: 100px; 
  
}

.delete-btn:hover {
  box-shadow    : none;
  color         : #030114; 
  background    : #faf5f5;
}

img{
  filter:drop-shadow(0 0 5px #666666);
}

</style>