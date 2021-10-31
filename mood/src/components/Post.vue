<template>
  <div class="post-body">
    <div class="card-section row">
      <Card
        :composer="composer"
        v-for="composer in composers"
        :key="composer"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      composers: "",
    };
  },
  created: function composers() {
    axios.get("http://localhost:8011/composer").then((result) => {
      this.composers = result.data;
    });
  },
};
</script>

<style>
</style>