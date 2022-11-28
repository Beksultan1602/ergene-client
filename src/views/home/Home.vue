<template>
  <app-layout>
    <div>
      <div class="container mx-auto">
        <home-news />
        <home-breaking />
        <home-partners />
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../layouts/AppLayout.vue";
import NewsCard from "../../components/cards/NewsCard.vue";
import HomeNews from "./HomeNews.vue";
import HomeBreaking from "./HomeBreaking.vue";
import HomePartners from "./HomePartners.vue";
export default {
  name: "Home",
  components: {HomePartners, HomeBreaking, HomeNews, NewsCard, AppLayout}
}
</script>

<style lang="scss">

</style>