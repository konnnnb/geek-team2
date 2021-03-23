<template>
<div class="showposts">
      <div v-for="(post, index) in myposts" v-bind:key="index">
        <div class="showPost" v-if="currentUser===post.uid">
          <div  v-on:click="ToshowPost(post.id)">
        <div><h2>{{ post.mainTitle }}</h2></div>
        <div v-for="(value, index) in post.category" v-bind:key="index">
          <h4>#{{ value }} </h4>
        </div>
        <h5>{{ post.mainDescription }}</h5>
        <img v-bind:src="post.mainImage">
          </div>

         <div  v-on:click="ToshowDelete(post.id)">
        <!-- <Trush/> -->削除
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
    components: {
      // Trush,
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
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: 100px;
  margin-right: 100px;
}

.showPost {
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  padding: 20px;
  margin: 10px;
}

h2 {
  text-align: center;
}

.showPost img {
  width: 400px;
  display: block;
  margin: auto;
}

</style>