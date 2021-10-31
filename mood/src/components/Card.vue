<template>
  <div class="card-body col-3">
    <div>
      <div class="audio-img" @click="getList">
        <img :src="`${composer.img}`" alt="🤵" />
      </div>
      <div>
        <p class="text-cetner" name="composerName">
          {{ composer.composer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    composer: Object,
  },
  data() {
    return {
      workList: "",
    };
  },
  methods: {
    getList() {
      axios
        .get(`http://localhost:8011/works/${this.composer.composer}`)
        .then((result) => {
          this.emitter.emit("works", result.data);
        });
    },
  },
};
</script>

<style>
</style>