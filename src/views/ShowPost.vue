<template>
<div class="showPost">
  <div class="main">
    {{post.category }}
    <div class="mainDescription">
      {{post.mainDescription}}
      <img v-bind:src="post.mainImage" alt="aa" width="20%">
    </div>
  </div>

  <div class="flowchart">
    <div class="start">
        <Point :post="post.startPosition"/>
        <Map :post="post.startPosition"/>
    </div>
    <div  v-for="(relay, index) in post.relayPosition" v-bind:key="index" class="relays">
        <Point :post="relay"/>
        <Map :post="relay"/>
    </div>
    <div class="end">
      <Point :post="post.endPosition"/>
      <Map :post="post.endPosition"/>
    </div>
  </div>
</div>
</template>

<script>
import Map from "@/components/Map.vue"
import Point from "@/components/Point.vue"
import {db} from "@/firebase.js"

export default {
  components :{
     Map, Point
    },
  data (){
    return {
      post : {},
    }
  },
  created() {
    console.log(this.$route.params.id)
      db
      .collection("posts")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        this.post = snapshot.data()
      });
  },

}
</script>

<style scoped>

.flowchart {
  display: flex;
  flex-direction: column;
  align-content: center;

}

.startposition-enter-active, .startposition-leave-active {
  transition: opacity 1s, transform 1s;
}
.startposition-enter,.startposition-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.startposition-enter-to, .startposition-leave {
  opacity: 1;
  transform: translateX(70px);
}

@keyframes identifier {
  to{}
  from{}
}

</style>


