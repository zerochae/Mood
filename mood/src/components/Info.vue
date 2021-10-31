<template>
  <div class="black-bg">
    <div class="white-bg container">
      <div class="Info-body row">
        <div class="col-1"></div>
        <div class="audio-img col-3">
          <img :src="`${workList[0].img}`" alt="" />
        </div>
        <div class="info-workList col-6">
          <ul @click="sendWorkData">
            <li v-for="work in workList" :key="work" @click="this.newWork=work">
              {{work.title}}
              {{work.opus}}
              {{work.tonality}}
            </li>
          </ul>
        </div>
         
        <button class="closeInfo-btn" @click="$emit('closeWorkList')"><i class="fas fa-times"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workList: Object,
  },
  data(){
    return {
      newWork : "",
    }
  },
  methods : {
    sendWorkData(){
      this.emitter.emit("sendWorkData",this.newWork)
    }
  }
};
</script>

<style>
</style>