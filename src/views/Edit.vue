<template>
<div>

<div class="container">
<p>editttt</p>
  <div class="main-display"><br>
  <!-- {{$store.getters.uid}} -->
  <!-- ================メインタイトル=================== --> 
       <div class="forms">
         <div class="main-title-label">
            <label class="titles">メインタイトル</label> 
            <span class="mandatory">必須</span>
          </div>
            <input class="m-title" type="text" placeholder="メインタイトルを入力してください" name="mainTitle" v-model="post.mainTitle" required/>
       </div><br><br><br>

  <!-- ================カテゴリー====================== -->
        <div class="forms">
          <div class="cate-title-label">
            <label class="titles" for="title">カテゴリー</label> 
            <!-- <span class="mandatory">必須</span> -->           
          </div>
       
          <div class="add-category">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <div v-for="(text,index) in post.category">
              
              <!-- カテゴリーinput箱 -->
              <input type="text" class="m-title" v-model="post.category[index]">

              <!-- 削除ボタン -->
              <button type="button" @click="removeCategory(index)">削除</button>

            </div>
            <!-- input追加 -->
            <button type="button" @click="addInput" class="minbtn">追加</button>
         </div>
       </div><br><br><br>


   <!-- ================メイン詳細文====================== -->
       <div class="forms">
         <div class="mdetail-label">
          <label class="titles">詳細</label>
          <span class="mandatory">必須</span>
         </div>
          <textarea  class="m-detail" type="text" name="mainDescription" v-model="post.mainDescription"  placeholder="メインとして表示する詳細文" rows="8" required></textarea>
       </div><br><br><br>
   <!-- ================メイン画像====================== -->       
       <div class="forms">
           <div class="mimage-label">
              <label class="titles">メイン写真</label>
              <span class="mandatory">必須</span>
          </div> 
            <!-- <input class="part" type="text" name="mainImage" v-model="post.mainImage"> -->
         <div>
            <input type="file" @change="setImage($event)" required/>
            <img :src="post.mainImage" class="setImage">
          </div>
        </div>
    
       <br><br><br>
  </div><br><br>
    <!-- </div><br><br><br> -->
   <!-- ================スタート地点====================== -->   
      <div class="main-display"><br>    
        <div class="forms">
            <div class="start-label">
              <label class="titles" for="title">スタート地点設定</label> 
            </div><br>

          <div id="map" class="maps">
            <GmapMap
              :center="center"
              :zoom="zoom"
              style="width: 730px; height: 400px; display: block; margin:auto;"
              :options="mapStyle"
              @click="getClickPosition"
            >
            <GmapInfoWindow
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen = false"
            >{{ infoTitle }}</GmapInfoWindow>
            <GmapMarker
              v-for="(m, id) in marker_items"
              :position="m.position"
              :title="m.title"
              :key="id"
              :icon="m.icon"
              :clickable="true"
              :draggable="false"
              v-on:click="toggleInfoWindow(m)"
            ></GmapMarker>
            </GmapMap>

          </div>
              <!-- </div> -->
              <br>

            <input class="m-title" type="text" name="startPosition" v-model="post.startPosition.title" placeholder="タイトル"><br><br>
            <textarea  class="m-detail" type="text" name="startPosition" v-model="post.startPosition.text"  placeholder="スタート地点で表示する内容" rows="8"></textarea>
         <div>
            <input type="file" @change="setImageStart($event)"/>
            <img :src="post.startPosition.image" class="setImage">
                 <!-- </div> -->
          </div><br><br><br>
        </div>
      </div>
<br><br><br>


   <!-- ================中間地点====================== -->    
   <div class="main-display"> <br>   
    <div class="forms">
          <div class="relay-title">
            <label class="titles" for="title">中間地点設定</label> 
          </div><br>
       
      <div class="add-relay">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div v-for="(text,index) in post.relayPosition">


          <div id="map" class="maps">
            <GmapMap
              :center="center"
              :zoom="zoom"
              style="width: 730px; height: 400px; display: block; margin:auto;"
              :options="mapStyle"
              @click="getClickPositionRelay($event,index)"
            >
              <GmapInfoWindow
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
              >{{ infoTitle }}</GmapInfoWindow>
              <GmapMarker
                v-for="(m, id) in marker_items_relay"
                :position="m.position"
                :title="m.title"
                :key="id"
                :icon="m.icon"
                :clickable="true"
                :draggable="false"
                v-on:click="toggleInfoWindow(m)"
              ></GmapMarker>
              </GmapMap>

            </div><br>

            
              <!-- 中間地点input箱 -->
              <input class="m-title" type="text" v-model="post.relayPosition[index].title" placeholder="タイトル"><br><br>
              <textarea  class="m-detail" type="text" v-model="post.relayPosition[index].text"  placeholder="中間地点で表示する内容" rows="8"></textarea>
              <!-- <input type="text" v-model="post.relayPosition[index].text" placeholder="内容"> -->
           <div>
              <input type="file" @change="setImageRelay($event,index)"/>
              <img :src="post.relayPosition[index].image" class="setImage">
           </div>
          <div>
            <!-- 削除ボタン -->
            <button type="button" @click="removeRelay(index)">削除</button>
          </div>
        </div><br><br>
          <!-- input追加 -->
        <button type="button" @click="addInput_relay" class="minbtn">追加</button>
       </div><br><br></div>
    </div><br><br><br>
   <!-- ================終了地点====================== -->
   <div class="main-display"><br>
    <div class="forms">
        <div class="end-label">
            <label class="titles" for="title">終了地点設定</label>
        </div> <br>

           <div id="map" class="maps">
            <GmapMap
              :center="center"
              :zoom="zoom"
              style="width: 730px; height: 400px; display: block; margin:auto;"
              :options="mapStyle"
              @click="getClickPositionEnd"
              >
              <GmapInfoWindow
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
              >{{ infoTitle }}</GmapInfoWindow>
              <GmapMarker
                v-for="(m, id) in marker_items_end"
                :position="m.position"
                :title="m.title"
                :key="id"
                :icon="m.icon"
                :clickable="true"
                :draggable="false"
                v-on:click="toggleInfoWindow(m)"
              ></GmapMarker>
            </GmapMap>
           </div><br>

            <input class="m-title" type="text" name="endPosition" v-model="post.endPosition.title" placeholder="タイトル"><br><br>
            <textarea  class="m-detail" type="text" name="endPosition" v-model="post.endPosition.text"  placeholder="終了地点で表示する内容" rows="8"></textarea>
           <br><br>
           <div>
              <input type="file" @change="setImageEnd($event)"/>
              <img :src="post.endPosition.image" class="setImage">
          </div><br>
    </div>
            <!-- </div><br><br><br> -->
            </div><br><br>
            <div class="post">
            <button class="postBtn" @click="onSubmit()">更新</button>
            </div>
         
    </div>
 
</div>
 
</template>

<script>
import { db, storage } from "@/firebase";
import store from "../store"
export default {
  name: "PostMap",
    data() {
    return {
   
      message:"",
      center: { lat: 35.698414, lng: 139.766325 },
      zoom: 18,
      mapStyle: {
        disableDefaultUI: true, // 表示のオプションを指定できます。
        styles: [
          // カスタマイズで使用したスタイルなどはここに。
        ]
      },
      marker_items: [
        { position: { lat: 35.698304, lng: 139.766325 }
        //, title: "title" 
        }
      ],
      marker_items_end: [
        { position: { lat: 35.298304, lng: 139.966325 }
        //, title: "title" 
        }
      ],
      marker_items_relay: [
        { position: { lat: 34.298304, lng: 138.966325 }
        //, title: "title" 
        }
      ],
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoTitle: null,

      post:{
        uid:"",
        mainTitle:"",
        category:[],
        mainDescription:"",
        mainImage:"",
        startPosition:{position:{lat:35,lng:35},image:"",title:"",text:"" },
        endPosition:{position:{lat:35,lng:35},image:"",title:"",text:""},
         relayPosition:[{position:{lat:35,lng:35},image:"",title:"",text:""}]
        // relayPosition:[]
      },
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

  methods: {

    addInput() {
       this.post.category.push(''); // 配列に１つ空データを追加する
     },
    addInput_relay() {
      this.post.relayPosition.push(
       {position:{lat:35,lng:35},image:"",title:"",text:""}
      ); 
     
     },
    removeCategory(index) {
       this.post.category.splice(index, 1); // 削除
     },
    removeRelay(index) {
       this.post.relayPosition.splice(index, 1); 
      //  console(this.post.relayPosition[index])
     },
    async setImage(e) {
      const file = (e.target.files || e.dataTransfer)[0]
      if (file.type.startsWith("image/")) {
        
        // 画像のURL
      this.post.mainImage = await this.upload(file);  
       
      }
    },
   async setImageStart(e) {
      const file = (e.target.files || e.dataTransfer)[0]
      if (file.type.startsWith("image/")) {
        this.post.startPosition.image = await this.upload(file);  
      }
    },
   async setImageRelay(e,index) {
      const file = (e.target.files || e.dataTransfer)[0]
      if (file.type.startsWith("image/")) {
        this.post.relayPosition[index].image = await this.upload(file);  
      }
    },
   async setImageEnd(e) {
      const file = (e.target.files || e.dataTransfer)[0]
      if (file.type.startsWith("image/")) {
        this.post.endPosition.image = await this.upload(file);  
      }
    },

    upload(file) {

      // ref は reference の略。データの在り処＝住所を表すイメージ。
      const storageRef = storage.ref();

      // 同じ名前のファイルと区別できるように timestamp を追加して、ユニークなファイル名をつける
      const createdAt = new Date();
      const timestamp = createdAt.getTime();
      const uniqueFileName = timestamp + "_" + file.name;
      const fileRef = storageRef.child("images/" + uniqueFileName);

      // fileRef の場所に file を送る。 put は "置き換える" の意味。
      // uploadTask.on("state_changed", ...) を使う方法もあるが、ひとまず then で実装する
      return fileRef.put(file).then(() => fileRef.getDownloadURL())

    },
  
    
    onSubmit() {
        console.log("submit!!!")
        this.post.uid=store.getters.uid

    db.collection("posts").doc(this.$route.params.id).update(
    this.post
  )
         console.log(JSON.stringify(this.post))
         this.$router.push("/mypage");
     },
    getClickPosition($event) {
      console.log(
        "緯度：" + $event.latLng.lat() + "経度" + $event.latLng.lng()
      );
      this.marker_items.push({
        position: { lat: $event.latLng.lat(), lng: $event.latLng.lng() },
        // title: "title"
      });
      // スタート地点マップ刺すと反映
      this.post.startPosition.position.lat=$event.latLng.lat()
      this.post.startPosition.position.lng=$event.latLng.lng()
    },
    getClickPositionEnd($event) {
      console.log(
        "緯度：" + $event.latLng.lat() + "経度" + $event.latLng.lng()
      );
      this.marker_items_end.push({
        position: { lat: $event.latLng.lat(), lng: $event.latLng.lng() },
        // title: "title"
      });
      // 終了地点マップ刺すと反映
      this.post.endPosition.position.lat=$event.latLng.lat()
      this.post.endPosition.position.lng=$event.latLng.lng()
    },
    getClickPositionRelay($event,index) {
      console.log(
        "緯度：" + $event.latLng.lat() + "経度" + $event.latLng.lng()
      );
      this.marker_items_relay.push({
        position: { lat: $event.latLng.lat(), lng: $event.latLng.lng() },
        // title: "title"
      });
      // 中間地点マップ刺すと反映
      this.post.relayPosition[index].position.lat=$event.latLng.lat()
      this.post.relayPosition[index].position.lng=$event.latLng.lng()
    },
    // delMarker(id) {
    //   this.marker_items.splice(id, 1);
    // },
    onDragEnd() {
      console.log("hoge");
    },
    toggleInfoWindow(marker) {
      this.infoWindowPos = marker.position;
      this.infoTitle = marker.title;
      this.infoWinOpen = true;
    }
  },

}
</script>

<style scoped>
 .m-title{
   width: 700px;
   /* box-shadow: 2px 2px 12px #cecece; */
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 4px;
  border: 2px solid rgb(117, 116, 116);
 }

 .m-detail{
   width: 735px;
   font-size: 15px;
   border: 2px solid rgb(136, 134, 134);
   border-radius: 4px;
 }

 .setImage{
   width: 300px;
   height: auto;
 }

.mandatory {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: rgb(214, 47, 47);
    text-align: center;
 
}

.titles{
  text-align: left;
  font-size: 130%;
  font-weight:bolder; 
}


.main-display{
  background-color: #fcf9f9;
  box-shadow: 2px 2px 12px #e2e1e1;
  margin-left: 150px;
  margin-right: 150px;
  text-align: center;
}

.container{
  display: flex;
flex-flow: column;
}

.postBtn{
  border-radius : 5%;
  font-size     : 15pt;
  text-align    : center; 
  cursor        : pointer;
  padding       : 19px 34px;
  background    : #000000;
  color         : #ffffff;
  line-height   : 1em;
  transition    : .3s; 
  box-shadow    : 3px 3px 9px #666666;  
  border        : 2px solid #000000;  
  width: 200px;  

}

.postBtn:hover {
  box-shadow    : none;
  color         : #000000; 
  background    : #ffffff;
}

.post{
  text-align: center;
}

.minbtn{
  display       : inline-block;
  border-radius : 5%;
  font-size     : 12pt;
  text-align    : center;
  cursor        : pointer;
  padding       : 10px 19px; 
  background    : #eeeeee;
  color         : #000000;
  line-height   : 1em; 
  opacity       : 1; 
  transition    : .3s;
  box-shadow    : 1px 1px 1px #666666; 
}
.minbtn:hover {
  box-shadow    : none;
  opacity       : 0.8;
}

</style>






