<template>
<div>
  <!-- ここにも表示される ↓-->
  <!-- {{$route.params.id}} -->
  <!-- <Post/> -->
  <Edit/>
</div>
</template>
<script>
import firebase from "firebase"
import store from "../store"
import Edit from "../views/Edit"
export default {
    data(){
    return{
      myposts:[],
      postid:"" 
         }
  },

    components: {
      Edit,
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