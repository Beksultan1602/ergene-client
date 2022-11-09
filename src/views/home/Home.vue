<template>
  <app-layout>
    <div>
      <div class="container mx-auto">
        <home-news />
        <home-breaking />
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../layouts/AppLayout.vue";
import NewsCard from "../../components/cards/NewsCard.vue";
import HomeNews from "./HomeNews.vue";
import HomeBreaking from "./HomeBreaking.vue";
export default {
  name: "Home",
  components: {HomeBreaking, HomeNews, NewsCard, AppLayout}
}
</script>

<style lang="scss">

</style>