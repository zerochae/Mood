<template>
  <div>
    <audio id="audio" controls>
      <source :src="`${songData.file}`" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {},
  props: {
    songData: Object,
  },
};
</script>

<style>
</style>