<template>

  <div >
    <div class="fas fa-map-marked-alt fa-2x" @click="showModal =  true"></div>
    <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" v-on:click="showModal = false">
              <transition name="slide" appear>
                <div class="slides">
                  <img v-bind:src="post.image" alt="aa" width="30%">
                  <GmapMap
                    :center="post.position"
                    :zoom="16"
                    style="width: 300px; height: 300px;"
                  >
                    <GmapMarker
                        :position="post.position"
                        :clickable="true"
                      :draggable="false"
                        style="size: 2px"
                      ></GmapMarker>
                  </GmapMap>
                </div>
              </transition>
              <button v-on:click="showModal = false">閉じる</button>
            </div>
      </transition>
  </div>
</template>

<script>
export default {
  props: {
     post: {
        type: Object, // String型に限定
        required: true, // 必須項目
    },
  },
  data (){
    return{
      showModal :false,
    }
}
}
</script>

<style scoped>
.fas{
  text-shadow: 3px 3px rgba(0,0,0,0.2);
  color:#c2e9fb;
  transition: 0.4s ease-out;
}

.fas:hover{
  text-shadow: 5px 5px rgba(0,0,0,0.5);
}
.modal-overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

}

.slides {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}
</style>