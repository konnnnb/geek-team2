<template>

  <div class="map">
    <button class="button" @click="showModal =  true">地図を表示</button>
    <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" v-on:click="showModal = false">
              <transition name="slide" appear>
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
.button {
  outline: none;
  border: none;
  box-shadow: 3px 3px rgba(0,0,0,0.2);
  border-radius: 8px;
  transition: 0.4s ease-out;
}

.button:hover{
  box-shadow: 5px 5px rgba(0,0,0,0.5);
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