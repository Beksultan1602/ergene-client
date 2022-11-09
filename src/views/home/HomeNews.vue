<template>
  <div class="flex flex-col xl:flex-row gap-4 w-full px-2">
    <news-card
        width="object-cover"
        background="5c9c4596.jpg"
        fashion="fashion"
        date="august 7, 2019"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestias perspiciatis provident saepe sequi tempore?"
    />
    <div class="flex xl:max-w-2xl flex-col gap-4">
      <news-card
          width="w-full object-cover"
          background="p9280338.jpg"
          fashion="fashion"
          date="august 7, 2019"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestias perspiciatis provident saepe sequi tempore?"
      />
      <div class="flex sm:flex-row flex-col gap-4">
        <news-card
            desc-styles=""
            width="w-full object-cover"
            background="bus.jpg"
            fashion="fashion"
            date="august 7, 2019"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestias perspiciatis provident saepe sequi tempore?"
        />
        <news-card
            desc-styles=""
            width="w-full object-cover"
            background="bus.jpg"
            fashion="fashion"
            date="august 7, 2019"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestias perspiciatis provident saepe sequi tempore?"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../../components/cards/NewsCard.vue";
export default {
  name: "HomeNews",
  components: {NewsCard}
}
</script>

<style scoped>

</style>