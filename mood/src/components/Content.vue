<template>
  <div class="content-body">
    <div class="content-songInfo">
      <h3> Work Infomation </h3>
      <table class="content-table container text-center my-5">
        <tr>
          <th>composer</th>
          <td>
            {{ songData.composer }}
          </td>
        </tr>
        <tr>
          <th>title</th>
          <td>
            {{ songData.title }} {{ songData.opus }} {{ songData.tonality }}
          </td>
        </tr>
        <tr>
          <th>instrument</th>
          <td>
            {{ songData.instrument }}
          </td>
        </tr>
        <tr>
          <th>style</th>
          <td>
            {{ songData.style }}
          </td>
        </tr>
        <tr>
          <th>birth</th>
          <td>
            {{ songData.birth }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  props: {
    songData: Object,
  },
  data(){
      return{
      }
  },
  methods :{
      // showInfo(){
      //     if(this.info == false){
      //         this.info = true;
      //     } else {
      //         this.info = false;
      //     }
      // }
  },
};
</script>

<style>
</style>