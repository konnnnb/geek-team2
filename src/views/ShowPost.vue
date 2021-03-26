<template>
<div>
  <div class="showPost" v-if="loading">
   <Loading /></div>
  <div v-else class="mainpost">
      <div class="main">
        <div class="categories">
          <div v-for="(value, index) in post.category" v-bind:key="index">
                <h4>#{{ value }}</h4>
          </div>
        </div>
        <div class="mainDescription">
          <img v-bind:src="post.mainImage" alt="aa" width="50%">
          <div class="description">
            {{post.mainDescription}}
            {{ post.mainTitle }}
          </div>
        </div>
    </div>

    <div class="flowchart">
      <div class="box" id="box1">
          <Point :post="post.startPosition" class="point"/>
          <Map :post="post.startPosition"/>
      </div>
      <div  v-for="(relay, index) in post.relayPosition" v-bind:key="index" class="box" id="box2">
          <Point :post="relay" class="point"/>
          <Map :post="relay"/>
      </div>
      <div class="box" id="box3">
        <Point :post="post.endPosition" class="point"/>
        <Map :post="post.endPosition"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Map from "@/components/Map.vue"
import Point from "@/components/Point.vue"
import {db} from "@/firebase.js"
import Loading from "@/components/Loading.vue"

export default {
  components :{
     Map, Point,  Loading
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
.mainpost {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.main {
  background-color:rgb(126, 255, 255, 0.4);
  width:70%;
}
.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.mainDescription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  width: 50%;
}
.flowchart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

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
  /* border-bottom: solid 6px #3f87ce; */
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25); */
  border-radius: 9px;
  width: 50%;
}

.point {
  margin-right: 2%;
}

#box1{
  background-color:#a1fd6b;

}

#box2 {
  background-color: rgb(252, 182, 101);
}

#box3 {
  background-color: rgb(161, 159, 248);
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


