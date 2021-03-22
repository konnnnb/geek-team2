<template>
<div>
  <div class="showPost" v-if="loading">loading...</div>
  <div v-else>
      <div class="main">
        <div v-for="(value, index) in post.category" v-bind:key="index">
              <h4>{{ value }}</h4>
        </div>
        <div class="mainDescription">
          <img v-bind:src="post.mainImage" alt="aa" width="20%">
          <div class="description">
            {{post.mainDescription}}
            {{ post.mainTitle }}
          </div>
        </div>
    </div>

    <div class="flowchart">
      <p1 class="box" id="1">
          <Point :post="post.startPosition" class="point"/>
          <Map :post="post.startPosition"/>
      </p1>
      <p2  v-for="(relay, index) in post.relayPosition" v-bind:key="index" class="box" id="2">
          <Point :post="relay" class="point"/>
          <Map :post="relay"/>
      </p2>
      <p3 class="box" id="3">
        <Point :post="post.endPosition" class="point"/>
        <Map :post="post.endPosition"/>
      </p3>
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
      loading: true,
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1000);
  // },
  created() {
    console.log(this.$route.params.id)
      db
      .collection("posts")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        this.loading = false
        this.post = snapshot.data()
      });
  },

}
</script>

<style scoped>

.mainDescription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flowchart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.box{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #FFF;
  /* background: #6eb7ff; */
  border-bottom: solid 6px #3f87ce;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  width: 50%;
}
.point {
  margin-right: 2%;
}

p1{
  background-color:#6eb7ff;
}

p2 {
  background-color: yellow;
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


