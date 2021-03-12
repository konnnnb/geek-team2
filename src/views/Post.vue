<template>
<div>

<div class="container">
    
  <!-- ================メインタイトル=================== --> 
       <div class="forms">
         <div>
            <label class="form-title" for="title">メインタイトル</label> 
            </div>
            <input class="m-title" type="text" placeholder="メインタイトルを入力してください" name="mainTitle" v-model="post.mainTitle">
       </div>

  <!-- ================カテゴリー====================== -->
        <div class="forms">
          <div>
            <label class="form-title" for="title">カテゴリー</label> 
          </div>
            <!-- <input class="part" type="text" name="category" v-model="post.category[0]"> -->
       
       <div class="add-category">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <div v-for="(text,index) in post.category">
            
          <!-- カテゴリーinput箱 -->
          <input type="text" v-model="post.category[index]">

          <!-- 削除ボタン -->
          <button type="button" @click="removeCategory(index)">削除</button>

        </div>
          <!-- input追加 -->
        <button type="button" @click="addInput">追加する</button>
       </div>
       </div>


   <!-- ================メイン詳細文====================== -->
       <div class="forms">
         <div>
         <label class="form-title" for="title">詳細</label>
         </div>
       <textarea  class="m-detail" type="text" name="mainDescription" v-model="post.mainDescription" data-formrun-class-if-error="form-control-danger" data-formrun-class-if-success="form-control-success" placeholder="メインとして表示する詳細文" rows="8"></textarea>
       </div>
   <!-- ================メイン画像====================== -->       
       <div class="forms">
         <div>
            <label class="form-title" for="title">メイン写真</label>
         </div> 
            <!-- <input class="part" type="text" name="mainImage" v-model="post.mainImage"> -->
      <div>
     <input type="file" @change="setImage($event)"/>
     <img :src="post.mainImage" class="setImage">
  </div>
       </div><br><br><br><br><br><br>
   <!-- ================スタート地点====================== -->       
              <div class="forms">
                <div>
            <label class="form-title" for="title">スタート地点設定</label> 
                </div>


  <!-- <div class="postMap">
    <div v-for="(marker, id) in marker_items" :key="id">
      <button v-on:click="delMarker(id)">削除</button>
      <input type="text" v-model="marker.title" />
      {{ marker.position }}
    </div> -->
    <!-- ==start-map== -->
    <div id="map" class="maps">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="width: 500px; height: 500px;"
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
  </div>
            <input class="part" type="text" name="startPosition" v-model="post.startPosition.position.lat" placeholder="緯度">
            <input class="part" type="text" name="startPosition" v-model="post.startPosition.position.lng" placeholder="経度">
            <!-- <input class="part" type="text" name="startPosition" v-model="post.startPosition.image" placeholder="画像"> -->
            <input class="part" type="text" name="startPosition" v-model="post.startPosition.title" placeholder="タイトル">
            <textarea  class="m-detail" type="text" name="startPosition" v-model="post.startPosition.text"  placeholder="スタート地点で表示する内容" rows="8"></textarea>
      <div>
        <input type="file" @change="setImageStart($event)"/>
        <img :src="post.startPosition.image" class="setImage">
     </div>
       </div><br><br><br><br><br><br>


   <!-- ================中間地点====================== -->       
        <div class="forms">
            <label class="form-title" for="title">中間地点設定</label> 
       </div>
       
    <div class="add-relay">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-for="(text,index) in post.relayPosition">


      <div id="map" class="maps">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="width: 500px; height: 500px;"
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

    </div>

            
          <!-- 中間地点input箱 -->
          <input type="text" v-model="post.relayPosition[index].position.lat" placeholder="緯度">
          <input type="text" v-model="post.relayPosition[index].position.lng" placeholder="経度">
          <!-- <input type="text" v-model="post.relayPosition[index].image" placeholder="画像"> -->
          <input type="text" v-model="post.relayPosition[index].title" placeholder="タイトル">
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
        </div>
          <!-- input追加 -->
        <button type="button" @click="addInput_relay">追加する</button>
       </div><br><br><br><br><br><br>
   <!-- ================終了地点====================== -->
      <div class="forms">
        <div>
            <label class="form-title" for="title">終了地点設定</label>
        </div> 

           <div id="map" class="maps">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="width: 500px; height: 500px;"
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

    </div>
        
            <input class="part" type="text" name="endPosition" v-model="post.endPosition.position.lat" placeholder="緯度">
            <input class="part" type="text" name="endPosition" v-model="post.endPosition.position.lng" placeholder="経度">
            <!-- <input class="part" type="text" name="endPosition" v-model="post.endPosition.image" placeholder="画像"> -->
            <input class="part" type="text" name="endPosition" v-model="post.endPosition.title" placeholder="タイトル">
            <textarea  class="m-detail" type="text" name="endPosition" v-model="post.endPosition.text"  placeholder="終了地点で表示する内容" rows="8"></textarea>
           <div>
              <input type="file" @change="setImageEnd($event)"/>
              <img :src="post.endPosition.image" class="setImage">
          </div>
       </div>
       <div class="simple-form__footer">
            <button class="simple-form__submit-btn" @click="onSubmit()">Post</button>
            <!-- <div>{{message}}</div> -->
       </div>
 
</div>
 
</template>

<script>
import { db, storage } from "@/firebase";

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
        mainTitle:"",
        category:[],
        mainDescription:"",
        mainImage:"",
        startPosition:{position:{lat:35,lng:35},image:"",title:"",text:"" },
        endPosition:{position:{lat:35,lng:35},image:"",title:"",text:""},
        // relayPosition:{longitude:"",latitude:"",image:"",title:"",text:""}
         relayPosition:[{position:{lat:35,lng:35},image:"",title:"",text:""}]
        // relayPosition:[]
      },
    }
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
      // this.message = "アップロード中...";
      

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
        // 上の then のなかで snapshot.getDownloadURL().then(...) と書いてもいいが、
        // then で続けられるやつを return すると、外側に then を続けることができ、よみやすい
        // 例 fetch(...).then(res => res.json()).then(...)
        // .then(url => {
        //   // storage にアップロードしたファイルに対応するドキュメントを保存する
        //   // const image = {
        //   //   name: file.name,
        //   //   url,
        //   //   createdAt
        //   // };
        //   // return db.collection("images").add(image);
        // })
        // .then(() => {
        //   this.message = "アップロード完了！";
        //   setTimeout(() => {
        //     this.message = "";
        //     this.disabled = false;
        //   }, 1000);
        // }
       // );
    },
  
    
    onSubmit() {
        console.log("submit!!!");
       db.collection("posts").add(this.post)
        console.log(JSON.stringify(this.post))
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

  computed: {
        // isInValidName() {
        //     return this.name.length < 5
        // },
    },
}
</script>

<style scoped>
 .m-title{
   width: 300px;
 }

 .m-detail{
   width: 600px;
 }

 .setImage{
   width: 500px;
   height: auto;;
 }

 .maps{
   position:relative;
 }
</style>






