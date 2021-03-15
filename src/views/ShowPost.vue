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
    
      post : {
         title:"春のお散歩",
         category: "自然",
         description:"桜の季節にぴったり",
         startPosition:{position:{lat: 35.698414, lng: 139.766325}, title:"吉祥寺駅",text:"出発" },
         relayPosition:[{position:{lat: 35.708414, lng: 139.776325},title:"三鷹駅",text:"出発" },{position:{lat: 35.728414, lng: 139.796325},title:"武蔵小金井",text:"出発" }],
         endPosition:{position:{lat: 35.718414, lng: 139.786325},title:"武蔵境駅",text:"出発" }
      },
    }
  },
  created() {
      db
      .collection("posts")
      .get()
      .then(snapshot => {
        this.post = snapshot.docs[0].data()
      });
  },

}
</script>

<style scoped>

/* .tripTitle {
  background-image: ;
} */
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


