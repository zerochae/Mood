<template>
  <div class="container-body">
    <div class="container text-center">
      <div class="audio-display row">
        <div class="audio-player col-5">
          <div class="audio-img">
            <img :src="`${songData.img}`" alt="🤵" />
          </div>
          <Audio :songData="songData" />
          <div><button class="playBtn" @click="song">Random play</button></div>
        </div>
        <div class="audio-content col-5">
          <Content :songData="songData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Audio from "./Audio.vue";
import Content from "./Content.vue";
import axios from "axios";
export default {
  name: "Container",

  components: {
    Audio,
    Content,
  },
  prop: {},
  data() {
    return {
      songData: "songData",
    };
  },
  methods: {
    song() {
      axios
        .get("http://localhost:8011/selectone")
        .then((result) => {
          console.log(result.data);
          this.songData = result.data;

          let audio = document.querySelector("#audio");

          audio.load();
          audio.play();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created: function start() {
    axios
      .get("http://localhost:8011/selectone")
      .then((result) => {
        console.log(result.data);
        this.songData = result.data;

        let audio = document.querySelector("#audio");

        audio.load();
        audio.play();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.emitter.on("sendWorkData", (result) => {
      this.songData = result;

      let audio = document.querySelector("#audio");

      audio.load();
      audio.play();
    });
  },
};
</script>

<style>
</style>